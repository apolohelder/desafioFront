import axios from 'axios';
import type { GitHubUser } from '../types/github';

const githubApi = axios.create({
    baseURL: import.meta.env.VITE_GITHUB_API_URL,
});

export async function getUser(username: string): Promise<GitHubUser> {
    const response = await githubApi.get<GitHubUser>(`/users/${username}`);
    return response.data;
}