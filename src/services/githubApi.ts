import axios from 'axios';
import type { GitHubUser } from '../types/GitHubUser';
import type { GitHubRepo } from '../types/GitHubRepo';

const githubApi = axios.create({
    baseURL: import.meta.env.VITE_GITHUB_API_URL,
});

export async function getUser(username: string): Promise<GitHubUser> {
    const response = await githubApi.get<GitHubUser>(`/users/${username}`);
    return response.data;
}

export async function getUserRepos(username: string): Promise<GitHubRepo[]> {
    const response = await githubApi.get<GitHubRepo[]>(`/users/${username}/repos`);
    return response.data;
}