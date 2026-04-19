import type { BoxStatsProps } from '../types/BoxStatsProps';

export function BoxStatsRepo({ title, numberStat }: BoxStatsProps) {
    return (

        <div className="col-6 col-md-3">
            <div className="border rounded p-3 h-100">
                <strong>{title}</strong>
                <p className="mb-0 mt-2">{numberStat}</p>
            </div>
        </div>
    );
}