import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loading } from '../components/Loading';
import { repoDetailsFetch } from '../hooks/repoDetailsFetch';
import { BoxStatsRepo } from '../components/BoxStatsRepo';

export function Repositories() {

    const { owner, repo } = useParams<{ owner: string; repo: string }>();

    const fullName = useMemo(() => {
        if (!owner || !repo) return null;
        return `${owner}/${repo}`;
    }, [owner, repo]);

    const { repo: repoData, loading, error } = repoDetailsFetch(fullName);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
    if (!repoData) return null;

    return (
        <div className="container">
            <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-md-5">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
                        <div>
                            <p className="text-muted mb-1">{repoData.full_name}</p>
                            <h1 className="h2 mb-2">{repoData.name}</h1>
                            <p className="text-muted mb-0">
                                {repoData.description || 'Sem descrição informada.'}
                            </p>
                        </div>

                        <div className="mt-3 mt-md-0">
                            <a
                                href={repoData.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-dark"
                            >
                                Abrir no GitHub
                            </a>
                        </div>
                    </div>

                    <div className="row g-3 mb-4">
                        <BoxStatsRepo title="Estrelas" numberStat={repoData.stargazers_count} />
                        <BoxStatsRepo title="Linguagem" numberStat={repoData.language || 'Não informada'} />
                        <BoxStatsRepo title="Forks" numberStat={repoData.forks_count} />
                        <BoxStatsRepo title="Forks" numberStat={repoData.open_issues_count} />
                    </div>

                    <div className="row g-4 mb-4">
                        <div className="col-12 col-md-6">
                            <div className="border rounded p-3 h-100">
                                <h2 className="h5 mb-3">Informações adicionais</h2>

                                <p className="mb-2">
                                    <strong>Watchers:</strong> {repoData.watchers_count}
                                </p>

                                <p className="mb-2">
                                    <strong>Branch padrão:</strong> {repoData.default_branch}
                                </p>

                                <p className="mb-2">
                                    <strong>Criado em:</strong>{' '}
                                    {new Date(repoData.created_at).toLocaleDateString('pt-BR')}
                                </p>

                                <p className="mb-0">
                                    <strong>Última atualização:</strong>{' '}
                                    {new Date(repoData.updated_at).toLocaleDateString('pt-BR')}
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="border rounded p-3 h-100">
                                <h2 className="h5 mb-3">Proprietário</h2>

                                <div className="d-flex align-items-center gap-3">
                                    <img
                                        src={repoData.owner.avatar_url}
                                        alt={repoData.owner.login}
                                        width={56}
                                        height={56}
                                        className="rounded-circle"
                                    />

                                    <div>
                                        <p className="mb-1">
                                            <strong>{repoData.owner.login}</strong>
                                        </p>

                                        <a
                                            href={repoData.owner.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ver perfil do owner
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded p-3">
                        <h2 className="h5 mb-3">Licença e tópicos</h2>

                        <p className="mb-3">
                            <strong>Licença:</strong>{' '}
                            {repoData.license?.name || 'Não informada'}
                        </p>

                        {repoData.topics && repoData.topics.length > 0 ? (
                            <div className="d-flex flex-wrap gap-2">
                                {repoData.topics.map((topic) => (
                                    <span key={topic} className="badge text-bg-secondary">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="mb-0 text-muted">Nenhum tópico informado.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}