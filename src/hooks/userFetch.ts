import { useEffect, useState } from 'react';
import { getUser } from '../services/githubApi';
import type { GitHubUser } from '../types/GitHubUser';
import axios from 'axios';

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

            } catch (error) {

                if (axios.isAxiosError(error) && error.response?.status === 404) {
                    setError('Usuário não encontrado.');
                } else {
                    setError('Erro ao buscar dados do usuário.');
                }

                if (import.meta.env.DEV) {
                    console.error(error);
                }

            } finally {
                setLoading(false);
            }
        }

        fetchUser();

    }, [username]);

    return { user, loading, error };
}