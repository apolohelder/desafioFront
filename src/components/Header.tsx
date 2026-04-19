import { Link } from 'react-router-dom';


export function Header() {
    return (
        <header className="border-bottom shadow-sm bg-white py-2">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid px-md-5">
                    <Link className="navbar-brand fw-bold" to="/">DSoftware</Link>

                    <Link className="nav-link text-secondary me-auto" to="/">
                        Home
                    </Link>
                </div>
            </nav>

        </header>
    );
}