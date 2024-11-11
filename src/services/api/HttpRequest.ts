import Axios from "./Axios";

export const GetRequest = async (url: string, params?: unknown) => {
    const response = await Axios.get(url, { params });
    return response.data;
}

export const PostRequest = async (url: string, body?: unknown, params?: unknown) => {
    const response = await Axios.post(url, body, { params });
    return response.data;
}
        
export const PutRequest = async (url: string, body?: unknown, params?: unknown) => {
    const response = await Axios.put(url, body, { params });
    return response.data;
}

export const DeleteRequest = async (url: string, params?: unknown) => {
    const response = await Axios.delete(url, { params });
    return response.data;
}
