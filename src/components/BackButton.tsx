import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';

export function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            className="btn btn-outline-secondary mb-4 d-flex align-items-center"
            onClick={() => navigate(-1)}
        >
            <Icon name="angleLeft" size={20} className="me-2" />
            Voltar
        </button>
    );
}