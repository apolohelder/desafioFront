export function SearchForm() {

    return (

        <div className="mt-md-5 pt-5">
            <form className="position-relative">

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="username/repository-name" />
                    <label htmlFor="floatingInput"> Buscar por usuário ou repositório</label>
                </div>

                <button type="submit" className="btn btn-primary position-absolute top-50 end-0 translate-middle-y me-2">
                    Buscar
                </button>
            </form>
        </div>

    );
}