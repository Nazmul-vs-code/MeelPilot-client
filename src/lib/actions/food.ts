import { serverFetch } from "./server-fetch";

export const CreateFood = async (foodData: Record<string, unknown>) => {
    try {
        const result = await serverFetch(
            "/api/seller/foods",
            "POST",
            foodData
        );

        return result;
    } catch (error) {
        console.error("Failed to create food:", error);
        throw error;
    }
};