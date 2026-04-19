import { useEffect, useState } from 'react';
import { getUserRepos } from '../services/githubApi';
import type { GitHubRepo } from '../types/GitHubRepo';

export function repoFetch(username: string | undefined) {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loadingRepos, setLoadingRepos] = useState(true);
    const [repoError, setRepoError] = useState('');

    useEffect(() => {
        async function fetchRepos() {
            try {
                setLoadingRepos(true);
                setRepoError('');

                if (!username) return;

                const data = await getUserRepos(username);
                setRepos(data);
            } catch {
                setRepoError('Erro ao carregar repositórios.');
            } finally {
                setLoadingRepos(false);
            }
        }

        fetchRepos();
    }, [username]);

    return { repos, loadingRepos, repoError };
}