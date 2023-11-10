import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Lakukan sesuatu, misalnya menghapus token dari local storage
    const access_token = localStorage.removeItem("access_token");
    console.log(access_token);
    // Redirect ke halaman login atau halaman lain sesuai kebutuhan
    navigate("/login");
  };

  return (
    <>
      <section>
        <div className="d-flex flex-column align-items-center bg-secondary bg-gradient"></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Branded Things
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/add-user"} className="nav-link active">
                    Add Staff
                  </Link>
                </li>
                <li>
                  <Link to={"/category"} className="nav-link active">
                    Category
                  </Link>
                </li>
              </ul>
              <button
                onClick={handleLogout}
                className="btn btn-danger"
                type="submit"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
