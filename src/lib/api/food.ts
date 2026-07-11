import { GetApiFunction, GetApiFunctionById } from "./getApi";

export const GetFoods = async () => {
    try {
        return await GetApiFunction("/api/foods");
    } catch (error) {
        console.error("Failed to fetch foods:", error);
        return [];
    }
};


export const GetFoodById = async (id: string) => {
    return await GetApiFunctionById("/api/foods", id);
};