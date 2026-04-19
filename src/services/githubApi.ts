import axios from 'axios';
import type { GitHubUser } from '../types/GitHubUser';
import type { GitHubRepo } from '../types/GitHubRepo';

const githubApi = axios.create({
    baseURL: import.meta.env.VITE_GITHUB_API_URL,
});

async function fetchData<T>(url: string): Promise<T> {
    const { data } = await githubApi.get<T>(url);
    return data;
}

export const getUser = (username: string) => fetchData<GitHubUser>(`/users/${username}`);

export const getUserRepos = (username: string) => fetchData<GitHubRepo[]>(`/users/${username}/repos`);

export const getRepoDetails = (fullName: string) => fetchData<GitHubRepo>(`/repos/${fullName}`);