import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loading } from '../components/Loading';
import { RepoCard } from '../components/RepoCard';
import { RepoSortSelect } from '../components/RepoSortSelect';
import { repoFetch } from '../hooks/repoFetch';
import { userFetch } from '../hooks/userFetch';
import { BoxStats } from '../components/BoxStats';
import type { RepoSortOption } from '../types/RepoSortOption';
import { BackButton } from '../components/BackButton';

export default function User() {

    const { username } = useParams<{ username: string }>();
    const { user, loading, error } = userFetch(username);
    const { repos, loadingRepos, repoError } = repoFetch(username);
    const [sortBy, setSortBy] = useState<RepoSortOption>('stars-desc');

    const sortedRepos = useMemo(() => {

        const reposCopy = [...repos];

        switch (sortBy) {
            case 'stars-asc':
                return reposCopy.sort((a, b) => a.stargazers_count - b.stargazers_count);
            case 'name-asc':
                return reposCopy.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return reposCopy.sort((a, b) => b.name.localeCompare(a.name));
            case 'stars-desc':
            default:
                return reposCopy.sort((a, b) => b.stargazers_count - a.stargazers_count);
        }
    }, [repos, sortBy]);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
    if (!user) return null;

    return (
        <div className="container">

            <BackButton />

            <div className="card shadow-sm p-4">
                <div className="row align-items-center">

                    <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="img-fluid rounded-circle"
                            style={{ maxWidth: 150 }}
                        />
                    </div>

                    <div className="col-12 col-md-9">
                        <h2 className="mb-1">
                            {user.name || user.login}
                        </h2>

                        <p className="text-muted mb-2">
                            @{user.login}
                        </p>

                        <p className="mb-3">{user.bio || 'Bio não informada.'}</p>

                        <div className="row">

                            <BoxStats title="Seguidores" numberStat={user.followers} />

                            <BoxStats title="Seguindo" numberStat={user.following} />

                            <BoxStats title="E-mail" numberStat={user.email || 'Não informado'} />

                        </div>
                    </div>

                    <section>

                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 mt-5">
                            <h2 className="h4 mb-3 mb-md-0">Repositórios</h2>
                        </div>

                        <RepoSortSelect value={sortBy} onChange={setSortBy} />

                        {loadingRepos && <Loading />}

                        {repoError && <ErrorMessage message={repoError} />}

                        {!loadingRepos && !repoError && sortedRepos.length === 0 && (
                            <div className="alert alert-secondary">
                                Este usuário não possui repositórios públicos.
                            </div>
                        )}

                        {!loadingRepos && !repoError && sortedRepos.length > 0 && (
                            <div className="row g-3">
                                {sortedRepos.map((repo) => (
                                    <div key={repo.id} className="col-12 col-md-6">
                                        <RepoCard repo={repo} />
                                    </div>
                                ))}
                            </div>
                        )}

                    </section>
                </div>
            </div>
        </div>
    );
}