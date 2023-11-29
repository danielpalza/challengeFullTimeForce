export class CommitsResponse {
  commits: {
    author: string;
    message: string;
    avatar: string;
    date: string;
  }[];
  branch: string;
}
