import { Link } from 'react-router-dom';


export function Header() {
    return (
        <header className="border-bottom shadow-sm bg-white py-4">
            <div className="container-fluid px-md-5 text-center">
                <Link className="fs-4 navbar-brand fw-bold" to="/">Desbravador Software</Link>
            </div>
        </header>
    );
}