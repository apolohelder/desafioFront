import { useEffect, useState } from 'react';
import { getUser } from '../services/githubApi';
import type { GitHubUser } from '../types/github';

export function userFetch(username: string | undefined) {

    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                setError('');

                if (!username) return;

                const data = await getUser(username);
                setUser(data);
            } catch {
                setError('Usuário não encontrado.');
            } finally {
                setLoading(false);
            }
        }

        fetchUser();

    }, [username]);

    return { user, loading, error };
}