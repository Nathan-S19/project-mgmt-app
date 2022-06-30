import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-o">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} className="mr-2" alt="logo" />
            <div>Project Mgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
