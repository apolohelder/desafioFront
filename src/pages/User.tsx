import { useParams } from 'react-router-dom';
import { userFetch } from '../hooks/userFetch';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

export function User() {

    const { username } = useParams<{ username: string }>();
    const { user, loading, error } = userFetch(username);

    if (loading) return <Loading />;

    if (error) return <ErrorMessage message={error} />;

    if (!user) return null;

    return (
        <div className="container py-5">
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

                        {user.bio && (
                            <p className="mb-3">{user.bio}</p>
                        )}

                        <div className="row">
                            <div className="col-6 col-md-4">
                                <strong>Seguidores</strong>
                                <p className="mb-2">{user.followers}</p>
                            </div>

                            <div className="col-6 col-md-4">
                                <strong>Seguindo</strong>
                                <p className="mb-2">{user.following}</p>
                            </div>

                            <div className="col-12 col-md-4">
                                <strong>E-mail</strong>
                                <p className="mb-2">
                                    {user.email || 'Não informado'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}