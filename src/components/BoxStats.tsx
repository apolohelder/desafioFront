import type { BoxStatsProps } from '../types/BoxStatsProps';

export function BoxStats({ title, numberStat }: BoxStatsProps) {
    return (
        <div className="col-6 col-md-4">
            <strong>{title}</strong>
            <p className="mb-2">{numberStat}</p>
        </div>
    );
}