import { Link } from 'react-router-dom';


export function Header() {
    return (
        <header className="border-bottom shadow-sm bg-white py-2">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid px-md-5">
                    <Link className="navbar-brand fw-bold" to="/">DSoftware</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="">
                                    Usuário
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="">
                                    Repositório
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}