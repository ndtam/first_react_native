import ListState from "../../../core/presentation/types/ListState";
import PostEntity from "../../domain/entities/PostEntity";

type GetPostsStoreState = ListState<PostEntity>;

export default GetPostsStoreState;
