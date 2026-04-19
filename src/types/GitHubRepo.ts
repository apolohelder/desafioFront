export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
}