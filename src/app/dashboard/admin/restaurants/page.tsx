import AdminRestaurantCard from "@/components/dashboard/admin/AdminRestaurantCard";
import { GetRestaurants } from "@/lib/api/restaurants";

// This tells Next.js to skip prerendering this page during the build
export const dynamic = "force-dynamic";

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

const AdminRestaurantsPage = async () => {
    const restaurants = await GetRestaurants("/api/restaurants");

    return (
        <section className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-red-500">
                    Manage Restaurants 🍽️
                </h1>

                <p className="mt-1 text-gray-500">
                    Total Restaurants:{" "}
                    <span className="font-semibold text-red-500">
                        {restaurants?.length || 0}
                    </span>
                </p>
            </div>

            <div className="space-y-5">
                {restaurants && restaurants.map((restaurant: Restaurant) => (
                    <AdminRestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        </section>
    );
};

export default AdminRestaurantsPage;