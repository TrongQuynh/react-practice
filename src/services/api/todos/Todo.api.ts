export const TodoApi = {
    GET_TO_DO: () => "/todos",
    DETAIL_TO_DO: (id: number) => `/todos/${id}`,
    CREATE_TO_DO: () => "/todos",
    UPDATE_TO_DO: (id: number) => `/todos/${id}`,
    DELETE_TO_DO: (id: number) => `/todos/${id}`
}