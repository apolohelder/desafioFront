import { Link } from 'react-router-dom';
import type { GitHubRepo } from '../types/GitHubRepo';
import { Icon } from './Icon';

interface RepoCardProps {
    repo: GitHubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h3 className="h5 card-title">{repo.name}</h3>

                <p className="card-text text-muted">
                    {repo.description || 'Sem descrição informada.'}
                </p>

                <p className="mb-2">
                    <strong><Icon name="star" size={20} /> Estrelas Estrelas:</strong> {repo.stargazers_count}
                </p>

                <p className="mb-3">
                    <strong>Linguagem:</strong> {repo.language || 'Não informada'}
                </p>

                <Link to={`/repo/${repo.full_name}`} className="btn btn-outline-primary">
                    Ver detalhes
                </Link>
            </div>
        </div>
    );
}