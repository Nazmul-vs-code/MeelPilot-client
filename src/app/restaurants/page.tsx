import RestaurantCard from "@/components/restaurant/RestaurantCard";
import { GetRestaurants } from "@/lib/api/restaurants";

type Restaurant = {
    _id: string;
    restaurantName: string;
    ownerName: string;
    ownerEmail: string;
    location: string;
    image: string;
    phone: string;
    description: string;
    status: "pending" | "approved" | "rejected";
};
const PublicRestaurantsPage = async () => {


    const restaurants = await GetRestaurants("/api/restaurants");

    return (
        <section className="max-w-7xl mx-auto px-5 py-10">
            <h1 className="mb-8 text-3xl font-bold text-red-500">
                Restaurants 🍽️
            </h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {restaurants.map((restaurant: Restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        </section>
    );
};

export default PublicRestaurantsPage;