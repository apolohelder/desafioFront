import { Link } from 'react-router-dom';
import type { GitHubRepo } from '../types/GitHubRepo';
import { Icon } from './Icon';

interface RepoCardProps {
    repo: GitHubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="h5 card-title">{repo.name}</p>
                        <div><Icon name="star" className="text-warning" size={20} /> {repo.stargazers_count}</div>
                    </div>

                    <p className="card-text text-muted mb-3">
                        {repo.description || 'Sem descrição informada.'}
                    </p>
                </div>

                <div>
                    <p className="list-group-item border-top border-bottom py-2">
                        Linguagem: {repo.language || 'Não informada'}
                    </p>

                    <Link to={`/repo/${repo.full_name}`} className="btn btn-sm btn-outline-primary">
                        Ver detalhes
                    </Link>
                </div>
            </div>
        </div>
    );
}