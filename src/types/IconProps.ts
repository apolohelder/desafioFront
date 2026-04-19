import type { IconName } from '../constants/icons';

export interface IconProps {
    name: IconName;
    size?: number | string;
    className?: string;
    color?: string;
    title?: string;
}