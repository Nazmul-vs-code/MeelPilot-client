import { serverFetch } from "./server-fetch"


export const CreateRstaurants = async (formData: Record<string, unknown>) => {
    const result = await serverFetch('/api/seller/restaurants','POST',formData)

    // console.log(result , ' result from resturant function')
    return result;
}