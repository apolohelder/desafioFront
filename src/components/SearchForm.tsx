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
                        placeholder="username/repository-name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="searchInput"> Buscar por usuário ou repositório</label>
                </div>

                <button type="submit" className="btn btn-primary position-absolute top-50 end-0 translate-middle-y me-2 d-flex align-items-center">
                    <Icon name="search" size={20} className="me-2" title="Buscar" />
                    <span>Buscar</span>
                </button>
            </form>
        </div>

    );
}