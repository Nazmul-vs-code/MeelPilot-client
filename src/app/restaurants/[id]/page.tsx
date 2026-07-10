import RestaurantDetails from "@/components/restaurant/RestaurantDetails";
import { GetRestaurantById } from "@/lib/api/restaurants";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const RestaurantDetailsPage = async ({ params }: Props) => {
    const { id } = await params;

    const restaurant = await GetRestaurantById(
        "/api/restaurants",
        id
    );

    return (
        <RestaurantDetails restaurant={restaurant} />
    );
};

export default RestaurantDetailsPage;