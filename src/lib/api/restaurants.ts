import { GetApiFunction, GetApiFunctionById } from "./getApi"


export const GetRestaurants = async (endpoint:string) => {
    const result = await GetApiFunction(endpoint)
    return await result
}

export const GetRestaurantById = async (
    endpoint: string,
    id: string
) => {
    return await GetApiFunctionById(endpoint, id);
};