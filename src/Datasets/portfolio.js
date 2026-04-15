import logoDummy from "../assets/Common/logo-dummy.png";

const galleryImageModules = import.meta.glob("../assets/Portfolio/**/Gallery/**/*.webp", {
  eager: true,
});
const logoImageModules = import.meta.glob("../assets/Portfolio/**/*.png", {
  eager: true,
});

const normalizePath = (path) => path.replace("../assets/Portfolio/", "");

const getImageNumber = (path) => {
  const match = path.match(/Image-(\d+)\.webp$/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

const getPathRank = (path) => {
  if (/\/Gallery\/Image-\d+\.webp$/i.test(path)) return 0;
  if (/\/Gallery\/Images\/Image-\d+\.webp$/i.test(path)) return 1;
  if (/\/Gallery\/Exteriors\/Image-\d+\.webp$/i.test(path)) return 2;
  if (/\/Gallery\/Interiors\/Image-\d+\.webp$/i.test(path)) return 3;
  return 4;
};

const allGalleryImages = Object.entries(galleryImageModules).map(([path, module]) => ({
  path: normalizePath(path),
  src: module.default,
}));
const allLogos = Object.entries(logoImageModules).map(([path, module]) => ({
  path: normalizePath(path),
  src: module.default,
}));

const getDeveloperLogo = (assetDeveloperFolder) =>
  allLogos.find((logo) => {
    const segments = logo.path.split("/");
    return (
      segments.length === 2 &&
      segments[0] === assetDeveloperFolder &&
      /logo/i.test(segments[1])
    );
  })?.src ?? logoDummy;

const projectLogoAliases = {
  "Meraas/City-Walk-Crestlane-Phase-4&5": "Meraas/City-Walk-Crestlane/City-Walk-Crestlane-Logo.png",
  "Meraas/Nad-Al-Sheba-Gardens-Phase-11": "Meraas/Nad-Al-Sheba-Gardens/Nad-Al-Sheba-Gardens-Logo.png",
  "Nakheel/Palm-Jebel-Ali-Villa-Collection": "Nakheel/Palm-Jebel-Ali/Palm-Jebel-Ali-Logo.png",
  "Nakheel/Baygrove-Residences-Phase-2": "Nakheel/Baygrove-Residences-Phase-1/Baygrove-Residences-Logo.png",
  "Nakheel/Baygrove-Residences-Phase-3": "Nakheel/Baygrove-Residences-Phase-1/Baygrove-Residences-Logo.png",
  "Nakheel/Baygrove-Residences-Phase-4": "Nakheel/Baygrove-Residences-Phase-1/Baygrove-Residences-Logo.png",
  "Nakheel/The-Penthouse-Como-Residences": "Nakheel/Como-Residences/Como-Residences-Logo.png",
};

const getProjectLogo = (assetDeveloperFolder, assetProjectFolder) => {
  const exactLogo = allLogos.find((logo) => logo.path.startsWith(`${assetDeveloperFolder}/${assetProjectFolder}/`));
  if (exactLogo) return exactLogo.src;

  const aliasPath = projectLogoAliases[`${assetDeveloperFolder}/${assetProjectFolder}`];
  const aliasLogo = allLogos.find((logo) => logo.path === aliasPath);
  if (aliasLogo) return aliasLogo.src;

  return getDeveloperLogo(assetDeveloperFolder);
};

const getProjectGallery = (assetDeveloperFolder, assetProjectFolder) => {
  const projectPathPrefix = `${assetDeveloperFolder}/${assetProjectFolder}/Gallery/`;

  return allGalleryImages
    .filter((image) => image.path.startsWith(projectPathPrefix))
    .sort(
      (a, b) =>
        getPathRank(a.path) - getPathRank(b.path) ||
        getImageNumber(a.path) - getImageNumber(b.path) ||
        a.path.localeCompare(b.path)
    )
    .map((image) => image.src);
};

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const withGallery = (entry) => {
  const gallery = getProjectGallery(entry.assetDeveloperFolder, entry.assetProjectFolder);
  const thumbnail = gallery[0] ?? "";
  const slug = toSlug(entry.projectName);
  const normalizedDeveloper = entry.developer === "DP" ? "Dubai Properties" : entry.developer;
  const projectLogoImage = getProjectLogo(entry.assetDeveloperFolder, entry.assetProjectFolder);
  const developerLogoImage = getDeveloperLogo(entry.assetDeveloperFolder);
  const description =
    entry.description ??
    `${entry.projectName} is a premium ${normalizedDeveloper} launch in ${entry.masterCommunity}, scheduled for ${entry.launchDate}.`;

  return {
    ...entry,
    developer: normalizedDeveloper,
    description,
    slug,
    logoImage: projectLogoImage,
    communityLogoImage: projectLogoImage,
    developerLogoImage,
    thumbnail,
    gallery: gallery.slice(1),
    allImages: gallery,
  };
};

const portfolioEntries = [
  {
    masterCommunity: "D3",
    logo: "d3 Logo",
    developer: "Meraas",
    launchDate: "21 January 2026",
    projectName: "D3 Masterplan",
    toolkitLink: "https://www.livingatd3.meraas.com/broker-toolkit/home",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "D3-Masterplan",
  },
  {
    masterCommunity: "City Walk",
    logo: "City Walk Crestlane Logo",
    developer: "Meraas",
    launchDate: "27 November 2025",
    projectName: "City Walk Crestlane Phase 4 & 5",
    toolkitLink: "https://www.crestlane.meraas.com/broker-toolkit/phase-4-5",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "City-Walk-Crestlane-Phase-4&5",
  },
  {
    masterCommunity: "Nad Al Sheba",
    logo: "Nad Al Sheba Gardens Logo",
    developer: "Meraas",
    launchDate: "11 November 2025",
    projectName: "Nad Al Sheba Gardens Phase 11",
    toolkitLink: "https://nasg.meraas.com/broker-toolkit/phase-11",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "Nad-Al-Sheba-Gardens-Phase-11",
  },
  {
    masterCommunity: "D3",
    logo: "The Edit at d3 Logo",
    developer: "Meraas",
    launchDate: "8 November 2025",
    projectName: "The Edit at d3",
    toolkitLink: "https://editatd3.meraas.com/toolkit",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "The-Edit-at-D3",
  },
  {
    masterCommunity: "Solaya",
    logo: "Solaya Logo",
    developer: "Meraas",
    launchDate: "3 October 2025",
    projectName: "Solaya",
    toolkitLink: "https://solaya.meraas.com/toolkit",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "Solaya",
  },
  {
    masterCommunity: "Madinat Jumeirah Living",
    logo: "Nourelle - Madinat Jumeirah Living Logo",
    developer: "Meraas",
    launchDate: "2 October 2025",
    projectName: "Nourelle - Madinat Jumeirah Living",
    toolkitLink: "https://mjl.meraas.com/nourelle-toolkit",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "Nourelle-Madinat-Jumeirah-Living",
  },
  {
    masterCommunity: "City Walk",
    logo: "City Walk Crestlane Logo",
    developer: "Meraas",
    launchDate: "23 June 2025",
    projectName: "City Walk Crestlane",
    toolkitLink: "https://www.crestlane.meraas.com/broker-toolkit/main",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "City-Walk-Crestlane",
  },
  {
    masterCommunity: "Jumeirah Residences Emirates Towers",
    logo: "Jumeirah Residences Emirates Towers Logo",
    developer: "Meraas",
    launchDate: "11 June 2025",
    projectName: "Jumeirah Residences Emirates Towers",
    toolkitLink: "https://www.emiratestowers.meraas.com/broker-toolkit/home",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "Jumeirah-Residences-Emirates-Towers",
  },
  {
    masterCommunity: "D3",
    logo: "Atelis at D3 Logo",
    developer: "Meraas",
    launchDate: "12 April 2025",
    projectName: "Atelis at D3",
    toolkitLink: "https://atelisatd3.meraas.com/broker-toolkit/home",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "Atelis-at-D3",
  },
  {
    masterCommunity: "The Acres",
    logo: "The Acres Estates Logo",
    developer: "Meraas",
    launchDate: "3 March 2025",
    projectName: "The Acres Estates",
    toolkitLink: "https://theacres.meraas.com/the-acres-estates-broker-toolkit",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "The-Acres-Estates",
  },
  {
    masterCommunity: "Asora Bay Jumeirah",
    logo: "Asora Bay Jumeirah Logo",
    developer: "Meraas",
    launchDate: "26 February 2025",
    projectName: "Asora Bay Jumeirah",
    toolkitLink: "https://asorabay.meraas.com/toolkit",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "Asora-Bay-Jumeirah",
  },
  {
    masterCommunity: "The Acres",
    logo: "The Acres Logo",
    developer: "Meraas",
    launchDate: "14 December 2023",
    projectName: "The Acres",
    toolkitLink: "https://theacres.meraas.com/broker-toolkit/main",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "The-Acres",
  },
  {
    masterCommunity: "Nad Al Sheba",
    logo: "Nad Al Sheba Gardens Logo",
    developer: "Meraas",
    launchDate: "2 November 2023",
    projectName: "Nad Al Sheba Gardens",
    toolkitLink: "https://nasg.meraas.com/broker-toolkit/home",
    assetDeveloperFolder: "Meraas",
    assetProjectFolder: "Nad-Al-Sheba-Gardens",
  },
  {
    masterCommunity: "Palm Jebel Ali",
    logo: "Palm Central Logo",
    developer: "Nakheel",
    launchDate: "28 October 2025",
    projectName: "Palm Central",
    toolkitLink: "https://www.palmjebelali.ae/broker-toolkit/palm-central",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Palm-Central",
  },
  {
    masterCommunity: "Palm Jebel Ali",
    logo: "Palm Jebel Ali Logo",
    developer: "Nakheel",
    launchDate: "20 October 2025",
    projectName: "Palm Jebel Ali Villa Collection",
    toolkitLink: "https://www.palmjebelali.ae/broker-toolkit/villa-collections",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Palm-Jebel-Ali-Villa-Collection",
  },
  {
    masterCommunity: "Baygrove Residences",
    logo: "Baygrove Residences Logo",
    developer: "Nakheel",
    launchDate: "23 July 2025",
    projectName: "Baygrove Residences - Phase 4",
    toolkitLink: "https://baygrove.nakheel.com/broker-toolkit-phase-4/main",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Baygrove-Residences-Phase-4",
  },
  {
    masterCommunity: "Baygrove Residences",
    logo: "Baygrove Residences Logo",
    developer: "Nakheel",
    launchDate: "15 March 2025",
    projectName: "Baygrove Residences - Phase 3",
    toolkitLink: "https://baygrove.nakheel.com/broker-toolkit-phase-3/main",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Baygrove-Residences-Phase-3",
  },
  {
    masterCommunity: "Naya at District 1",
    logo: "Naya at District 1 Logo",
    developer: "Nakheel",
    launchDate: "19 February 2025",
    projectName: "Naya at District 1 - Phase 2",
    toolkitLink: "https://nayaatdistrict1.com/broker-toolkit/main",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Naya-at-District-1-Phase-2",
  },
  {
    masterCommunity: "Palm Jebel Ali",
    logo: "Palm Jebel Ali Logo",
    developer: "Nakheel",
    launchDate: "4 November 2024",
    projectName: "Palm Jebel Ali",
    toolkitLink: "https://www.palmjebelali.ae/broker-toolkit/main",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Palm-Jebel-Ali",
  },
  {
    masterCommunity: "Como Residences",
    logo: "Como Residences Logo",
    developer: "Nakheel",
    launchDate: "28 October 2024",
    projectName: "Como Residences",
    toolkitLink: "https://www.comobynakheel.com/broker-toolkit/home",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Como-Residences",
  },
  {
    masterCommunity: "Bay Villas",
    logo: "Bay Villas Logo",
    developer: "Nakheel",
    launchDate: "24 October 2024",
    projectName: "Bay Villas",
    toolkitLink: "https://bayvillas.dubaiislands.ae/emotions/main",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Bay Villas",
  },
  {
    masterCommunity: "Como Residences",
    logo: "The Penthouse Como Residences Logo",
    developer: "Nakheel",
    launchDate: "22 October 2024",
    projectName: "The Penthouse Como Residences",
    toolkitLink: "https://www.comobynakheel.com/emotions-penthouse/main-page",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "The-Penthouse-Como-Residences",
  },
  {
    masterCommunity: "Baygrove Residences",
    logo: "Baygrove Residences Logo",
    developer: "Nakheel",
    launchDate: "24 February 2024",
    projectName: "Baygrove Residences - Phase 2",
    toolkitLink: "https://baygrove.nakheel.com/brokerkit-phase2/home",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Baygrove-Residences-Phase-2",
  },
  {
    masterCommunity: "Baygrove Residences",
    logo: "Baygrove Residences Logo",
    developer: "Nakheel",
    launchDate: "24 January 2024",
    projectName: "Baygrove Residences - Phase 1",
    toolkitLink: "https://baygrove.nakheel.com/brokerkit/home",
    assetDeveloperFolder: "Nakheel",
    assetProjectFolder: "Baygrove-Residences-Phase-1",
  },
  {
    masterCommunity: "Villanova",
    logo: "La Tilia by Villanova Logo",
    developer: "Dubai Properties",
    launchDate: "12 February 2023",
    projectName: "La Tilia by Villanova",
    toolkitLink: "https://villanova.dp.ae/broker-kit/home",
    assetDeveloperFolder: "Dubai Properties",
    assetProjectFolder: "La-Tilia",
  },
];

export const portfolioData = portfolioEntries.map(withGallery);

export const getPortfolioBySlug = (slug) => portfolioData.find((item) => item.slug === slug);

export const portfolioDeveloperFilters = [
  { value: "All", label: "All", logoImage: null },
  { value: "Dubai Properties", label: "Dubai Properties", logoImage: getDeveloperLogo("Dubai Properties") },
  { value: "Nakheel", label: "Nakheel", logoImage: getDeveloperLogo("Nakheel") },
  { value: "Meraas", label: "Meraas", logoImage: getDeveloperLogo("Meraas") },
];