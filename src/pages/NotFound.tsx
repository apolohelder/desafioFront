import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="display-4 fw-bold">404</h1>
                <h2 className="h4 mb-3">Página não encontrada</h2>
                <p className="text-muted mb-4">
                    A rota que você tentou acessar não existe.
                </p>

                <Link to="/" className="btn btn-primary">
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
}