import { useEffect, useState } from 'react';
import { getRepoDetails } from '../services/githubApi';
import type { GitHubRepo } from '../types/GitHubRepo';

export function repoDetailsFetch(fullName: string | null) {
    const [repo, setRepo] = useState<GitHubRepo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchRepoDetails() {
            try {
                setLoading(true);
                setError('');

                if (!fullName) {
                    setError('Repositório inválido.');
                    return;
                }

                const data = await getRepoDetails(fullName);
                setRepo(data);
            } catch {
                setError('Repositório não encontrado.');
            } finally {
                setLoading(false);
            }
        }

        fetchRepoDetails();
    }, [fullName]);

    return { repo, loading, error };
}