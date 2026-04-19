import axios from 'axios';
import type { GitHubUser } from '../types/GitHubUser';
import type { GitHubRepo } from '../types/GitHubRepo';

const githubApi = axios.create({
    baseURL: import.meta.env.VITE_GITHUB_API_URL,
});

async function fetchData<T>(url: string): Promise<T> {
    try {
        const { data } = await githubApi.get<T>(url);
        return data;
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error(`Erro na requisição para ${url}`, error);
        }

        throw error;
    }
}

export const getUser = (username: string) => fetchData<GitHubUser>(`/users/${username}`);

export const getUserRepos = (username: string) => fetchData<GitHubRepo[]>(`/users/${username}/repos`);

export const getRepoDetails = (fullName: string) => fetchData<GitHubRepo>(`/repos/${fullName}`);