import { GetApiFunction } from "./getApi";

export const GetFoods = async () => {
    try {
        return await GetApiFunction("/api/foods");
    } catch (error) {
        console.error("Failed to fetch foods:", error);
        return [];
    }
};