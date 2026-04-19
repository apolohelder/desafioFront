import { ICON_PATHS } from '../constants/icons';
import type { IconName } from '../constants/icons';

interface IconProps {
    name: IconName;
    size?: number | string;
    className?: string;
    color?: string;
    title?: string;
}

export function Icon({
    name,
    size = '20px',
    className = '',
    color = 'currentColor',
    title,
}: IconProps) {
    const path = ICON_PATHS[name];

    if (!path) {
        console.warn(`Ícone "${name}" não encontrado`);
        return null;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            style={{
                width: typeof size === 'number' ? `${size}px` : size,
                height: typeof size === 'number' ? `${size}px` : size,
            }}
            className={className}
            aria-label={title}
        >
            <path d={path} fill={color} />
        </svg>
    );
}
