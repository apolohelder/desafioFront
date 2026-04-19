import { SearchForm } from '../components/SearchForm';
export default function Home() {
    return (
        <div className="py-5">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                    <h1 className="fs-1 fw-bold mb-5">Buscar usuário do GitHub</h1>

                    <p className="lead">
                        Busque um usuário do GitHub para visualizar seu perfil e os repositórios públicos mais populares.
                    </p>

                    <SearchForm />

                </div>

            </div>
        </div>
    );
}