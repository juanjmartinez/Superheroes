import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                SuperHeroes
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Buscar
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-50 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Juan José
                    </span>
                </ul>
            </div>

        </nav>
    )
}