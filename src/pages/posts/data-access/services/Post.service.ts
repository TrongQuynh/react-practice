import { GetRequest } from "src/services/api/HttpRequest";
import { PostApi } from "src/services/api/posts/Post.api";
import { IPost } from "../models/Post.model";

export class PostService {
    static getPosts = async () => {
        const response: IPost[] = await GetRequest(PostApi.GET_POST());
        return response;
    }
}