import type { RepoSortOption } from '../types/RepoSortOption';

interface RepoSortSelectProps {
    value: RepoSortOption;
    onChange: (value: RepoSortOption) => void;
}

export function RepoSortSelect({ value, onChange }: RepoSortSelectProps) {
    return (
        <div className="ms-auto mb-3 d-flex align-items-center justify-content-end gap-2">

            <label htmlFor="repo-order" className="form-label text-nowrap">
                Ordenar por:
            </label>

            <select
                id="repo-order"
                className="form-select"
                style={{ width: '150px' }}
                value={value}
                onChange={(e) => onChange(e.target.value as RepoSortOption)}
            >
                <option value="stars-desc">Mais estrelas</option>
                <option value="stars-asc">Menos estrelas</option>
                <option value="name-asc">Nome (A-Z)</option>
                <option value="name-desc">Nome (Z-A)</option>
            </select>

        </div>
    );
}