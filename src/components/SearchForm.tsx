import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';

export function SearchForm() {
    const [username, setUsername] = useState('');
    const [inputError, setInputError] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const formattedUsername = username.trim();

        if (!formattedUsername) {
            setInputError('Digite um usuário do GitHub.');
            return;
        }

        const isValidUsername = /^[a-zA-Z0-9-]+$/.test(formattedUsername);

        if (!isValidUsername) {
            setInputError('Digite um nome de usuário válido.');
            return;
        }

        setInputError('');
        navigate(`/user/${formattedUsername}`);
    }
    return (

        <div className="mb-md-5 pt-5">

            <form onSubmit={handleSubmit} className="position-relative" autoComplete="off">

                <div className="form-floating">
                    <input
                        required
                        type="text"
                        className="form-control rounded-4"
                        id="searchInput"
                        placeholder="Digite o nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="off"
                    />
                    <label htmlFor="searchInput">Buscar usuário do GitHub</label>
                </div>

                <button
                    type="submit"
                    aria-label="Buscar usuário"
                    disabled={!username.trim()}
                    className="btn btn-primary position-absolute top-50 end-0 translate-middle-y me-2 d-flex align-items-center"
                >
                    <Icon name="search" size={20} className="me-2" title="Buscar" />
                    <span>Buscar</span>
                </button>
            </form>

            {inputError && (
                <small className="text-danger">{inputError}</small>
            )}

        </div>

    );
}