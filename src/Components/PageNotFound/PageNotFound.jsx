import { Link } from "react-router-dom";
import notFoundImage from "../../assets/Common/not-found.svg";
import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <section className="page-not-found" aria-label="Page not found">
      <div className="page-not-found__card">
        <img src={notFoundImage} alt="Page not found" />
        <p className="page-not-found__label">404 Error</p>
        <h1>Page Not Found</h1>
        <p className="page-not-found__description">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link to="/" className="page-not-found__home-btn">
          Back To Home
        </Link>
      </div>
    </section>
  );
}
