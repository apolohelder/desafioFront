export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
    html_url: string;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;
    default_branch: string;
    created_at: string;
    updated_at: string;
    topics?: string[];
    license?: {
        name: string;
    } | null;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
}