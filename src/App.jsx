import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { APP_LOADER_DURATION_MS } from './constants/appLoader';
import { AppLoaderContext } from './context/AppLoaderContext';
import AppLoader from './Components/AppLoader/AppLoader';
import AppRouter from './Components/AppRouter/AppRouter';
import routes from './routes/routes.jsx';
import Header from './Components/Common/Header/Header.jsx';
import Footer from './Components/Common/Footer/Footer';

const PRE_NAVIGATION_LOADER_LEAD_MS = 220;


export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [ pageLoading, setPageLoading ] = useState(true);
  const loaderTimeoutRef = useRef(null);
  const preNavigationTimeoutRef = useRef(null);
  const bypassNextClickRef = useRef(false);

  /** On route change, show loader before paint and reset scroll position. */
  useLayoutEffect(() => {
    if (loaderTimeoutRef.current) {
      clearTimeout(loaderTimeoutRef.current);
    }

    setPageLoading(true);
    window.scrollTo(0, 0);

    loaderTimeoutRef.current = setTimeout(() => {
      setPageLoading(false);
    }, APP_LOADER_DURATION_MS);

    return () => {
      if (loaderTimeoutRef.current) {
        clearTimeout(loaderTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  useLayoutEffect(() => {
    const onDocumentClick = (event) => {
      if (event.defaultPrevented || bypassNextClickRef.current) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest('a[href]');
      if (!anchor) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      const targetUrl = new URL(href, window.location.origin);
      if (targetUrl.origin !== window.location.origin) return;

      const nextPath = `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;
      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (nextPath === currentPath) return;

      event.preventDefault();

      if (loaderTimeoutRef.current) {
        clearTimeout(loaderTimeoutRef.current);
      }
      if (preNavigationTimeoutRef.current) {
        clearTimeout(preNavigationTimeoutRef.current);
      }

      setPageLoading(true);

      preNavigationTimeoutRef.current = setTimeout(() => {
        bypassNextClickRef.current = true;
        navigate(nextPath);
        setTimeout(() => {
          bypassNextClickRef.current = false;
        }, 0);
      }, PRE_NAVIGATION_LOADER_LEAD_MS);
    };

    document.addEventListener('click', onDocumentClick, true);
    return () => {
      document.removeEventListener('click', onDocumentClick, true);
      if (preNavigationTimeoutRef.current) {
        clearTimeout(preNavigationTimeoutRef.current);
      }
    };
  }, [navigate]);

  return (
    <AppLoaderContext.Provider
      value={{ isPageLoading: pageLoading, loaderDurationMs: APP_LOADER_DURATION_MS }}
    >
      <AppLoader isVisible={pageLoading} />
      <div className={`app-shell ${!pageLoading ? 'is-ready' : ''}`}>
        <Fragment>
          <Header />
          <AppRouter routes={routes} />
          <Footer />
        </Fragment>
      </div>
      <ToastContainer position="top-right" autoClose={3500} newestOnTop closeOnClick />
    </AppLoaderContext.Provider>
  );
}