export interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    email: string | null;
    bio: string | null;
    name: string | null;
}