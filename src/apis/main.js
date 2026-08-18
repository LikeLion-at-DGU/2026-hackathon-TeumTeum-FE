import client from "./client"

export const getMain = async () => {
    const response = await client.get("/main");
    return response.data;
}