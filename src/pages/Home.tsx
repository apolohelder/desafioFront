import { SearchForm } from '../components/SearchForm';
export function Home() {
    return (
        <div className="pt-5 mt-md-5">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                    <h1 className="fs-1 fw-bold mb-5">Selecione o próximo commit</h1>

                    <p className="lead">Descubra desenvolvedores excepcionais e repositórios de classe mundial por meio de uma interface de alta fidelidade projetada para supervisão de engenharia de elite.</p>

                    <SearchForm />
                </div>

            </div>
        </div>
    );
}