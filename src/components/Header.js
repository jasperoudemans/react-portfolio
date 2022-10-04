import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <img
          src="/images/profile-picture.jpeg"
          alt="My face"
          className="profile-pic"
        />
        <h1 className="mainHeader">Jasper Oudemans</h1>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
