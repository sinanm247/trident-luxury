// Google Apps Script Web App URL - Replace with your deployed web app URL
// To get this URL: Deploy > New deployment > Web app > Copy the URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyuwqOtTWNNHBPF85SxrCPjmjc2RaDT5yMcHUdEHdxf7CpJBloQgWkRGYHTli4vCs9J/exec";

/**
 * Sends form data to Google Sheets via Google Apps Script
 * @param {Object} formData - Form data object
 * @param {string} formData.name - User's name
 * @param {string} formData.phone - User's phone number
 * @param {string} formData.email - User's email (optional)
 * @param {string} formData.message - Message content
 * @param {string} formData.source - Source of the form (optional, defaults to "Contact Form")
 * @returns {Promise<boolean>} - Returns true if successful, false otherwise
 */
const sendToGoogleSheets = async (formData) => {
    // Skip if URL is not configured
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_APPS_SCRIPT")) {
        console.warn("Google Sheets integration not configured. Skipping...");
        return { success: false, error: "Google Sheets URL not configured" };
    }

    try {
        // Prepare the data to send
        const dataToSend = {
            name: formData.name || "",
            phone: formData.phone || "",
            email: formData.email || "",
            message: formData.message || "",
            source: formData.source || "Contact Form",
        };
        
        // Debug logging
        console.log("Sending to Google Sheets - Full data:", JSON.stringify(dataToSend, null, 2));
        console.log("Source being sent:", dataToSend.source);
        
        // Try with CORS mode first to get proper response
        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Data sent to Google Sheets successfully:", result);
            return { success: true, message: result.message || "Data sent successfully" };
        } catch (corsError) {
            // If CORS fails, try with no-cors mode as fallback
            console.warn("CORS mode failed, trying no-cors mode:", corsError);
            
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            // With no-cors mode, we can't read the response, but the data is still sent
            // We assume success since the request was sent without errors
            console.log("Data sent to Google Sheets (response not readable due to no-cors mode)");
            return { success: true, message: "Data sent successfully" };
        }
        
    } catch (error) {
        console.error("Google Sheets error:", error);
        // Even if there's an error, the data might still be saved
        // Return success: false but don't block the main flow
        return { success: false, error: error.message };
    }
};

/**
 * Sends contact form data to Google Sheets (which automatically sends email notifications)
 * Google Apps Script handles email sending when data is saved
 * @param {Object} formData - Form data object
 * @param {string} formData.name - User's name
 * @param {string} formData.phone - User's phone number
 * @param {string} formData.email - User's email (optional)
 * @param {string} formData.message - Message content
 * @param {string} formData.source - Source of the form (optional, defaults to "Contact Form")
 * @returns {Promise<boolean>} - Returns true if successful, false otherwise
 */
export const sendContactFormEmail = async (formData) => {
    try {
        // Add source for contact form (or preserve source if explicitly provided)
        const formDataWithSource = {
            ...formData,
            source: formData.source || "Contact Form",
        };

        // Debug logging
        console.log("Sending to Google Sheets:", formDataWithSource);
        console.log("Source:", formDataWithSource.source);

        // Send to Google Sheets - this will trigger email notification via Google Apps Script
        const result = await sendToGoogleSheets(formDataWithSource);

        if (result.success) {
            return { success: true, message: "Data saved successfully" };
        } else {
            throw new Error(result.error || "Failed to save data");
        }
    } catch (error) {
        console.error("Form submission error:", error);
        return { success: false, error: error.message || error };
    }
};

