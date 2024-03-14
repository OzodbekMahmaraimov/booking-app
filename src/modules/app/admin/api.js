const http= "http://localhost:3000/"

export const addDacha = (payload: any) => http.post(`/dacha`, payload);
export const uploadImg = (payload: any) => http.post(`/attach/upload`, payload);