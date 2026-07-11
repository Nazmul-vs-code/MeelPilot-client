import RestaurantSelectionCard from "@/components/dashboard/seller/RestaurantSelectionCard";
import { GetRestaurantBySellerEmail } from "@/lib/api/restaurants";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaStore } from "react-icons/fa";

const CreateFoodPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const restaurants = await GetRestaurantBySellerEmail(
        session?.user?.email || ""
    );

    return (
        <section className="space-y-8">

            {/* Header */}

            <div>

                <h1 className="text-4xl font-bold text-red-500">
                    Select a Restaurant 🍽️
                </h1>

                <p className="mt-2 text-gray-500">
                    Choose the restaurant where you want to add new food items.
                </p>

            </div>

            {/* Restaurants */}

            {restaurants.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {restaurants.map((restaurant: any) => (
                        <RestaurantSelectionCard
                            key={restaurant._id}
                            restaurant={restaurant}
                        />
                    ))}

                </div>
            ) : (
                <div className="rounded-3xl border border-dashed border-red-200 py-20 text-center">

                    <FaStore className="mx-auto mb-5 text-6xl text-red-300" />

                    <h2 className="text-2xl font-bold text-red-500">
                        No Restaurants Found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Please create a restaurant before adding food items.
                    </p>

                </div>
            )}

        </section>
    );
};

export default CreateFoodPage;