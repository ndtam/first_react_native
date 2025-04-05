import PostEntity from "../../domain/entities/PostEntity";

export default interface GetPostsResponse {
  results: PostEntity[];
  count: number;
}
