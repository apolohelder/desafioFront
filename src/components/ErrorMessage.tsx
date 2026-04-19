import type { ErrorMessage } from '../types/ErrorMessage';
import { Icon } from './Icon';

export function ErrorMessage({ message }: ErrorMessage) {
    return (
        <div className="alert alert-warning d-flex align-items-center" role="alert">
            <Icon name="triangleExclamation" size={40} className="me-2" />
            <div>
                {message}
            </div>
        </div>
    );
}