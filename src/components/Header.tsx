function Header() {
  return (
    <header>
      <nav>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#exp">
            <li>Experience</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
        </ul>
      </nav>
      {/*       <div className="left-header-container">
        <div>
          <h1>
            Piotr
            <br />
            Głazowski
          </h1>
          <h2 className="header-title">Frontend Developer</h2>
        </div>

        <div className="img-container">
          <img src={photo} alt="" />
        </div>
      </div> */}
    </header>
  );
}

export default Header;
