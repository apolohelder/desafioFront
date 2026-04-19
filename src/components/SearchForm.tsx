import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';

export function SearchForm() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!username.trim()) return;

        navigate(`/user/${username}`);
    }
    return (

        <div className="mt-md-5 pt-5">

            <form onSubmit={handleSubmit} className="position-relative">

                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="searchInput"
                        placeholder="Digite o nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="searchInput">Buscar usuário do GitHub</label>
                </div>

                <button
                    type="submit"
                    aria-label="Buscar usuário"
                    className="btn btn-primary position-absolute top-50 end-0 translate-middle-y me-2 d-flex align-items-center"
                >
                    <Icon name="search" size={20} className="me-2" title="Buscar" />
                    <span>Buscar</span>
                </button>
            </form>
        </div>

    );
}