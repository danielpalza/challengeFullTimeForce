export class CommitsResponse {
  commits: {
    author: string;
    message: string;
    avatar: string;
  }[];
  branch: string;
}
