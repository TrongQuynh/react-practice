import { GetRequest } from "src/services/api/HttpRequest";
import { IComment } from "../models/Comment.model";
import { CommentApi } from "src/services/api/comments/Comment.api";
import { IListCommentParams } from "../models/ListComment.req";

export class CommentService {
    static getComments = async (params: IListCommentParams) => {
        const response: IComment[] = await GetRequest(CommentApi.GET_COMMENT(), params);
        return response;
    }
}