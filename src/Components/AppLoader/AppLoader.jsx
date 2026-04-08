
import "./AppLoader.scss";
import logo from "../../assets/Logo/Logo-White-1.png";

export default function AppLoader({ isVisible }) {
  return (
    <div className={`app-loader-container ${isVisible ? "show" : "hide"}`}>
      <img
        src={logo}
        alt="Trident Luxury"
        className="logo"
      />
    </div>
  );
}
