import headerImage from "images/troll-face.png";

type THeaderProps = {
  title: string;
  mode: string;
  toggleMode: () => void;
};

const Header = ({ title, mode, toggleMode }: THeaderProps) => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <img
            className="header--image"
            alt="trollfaceimage"
            src={headerImage}
          />
          <h2 className="header--title">Meme-Generator</h2>
          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Dark mode
            </label>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
