import FoodCreateForm from "@/components/dashboard/seller/FoodCreateForm";
import { GetRestaurantById } from "@/lib/api/restaurants";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const SpacificRestaurantBasedFoodAddingPage = async ({
    params,
}: Props) => {
    const { id } = await params;

    const restaurant = await GetRestaurantById(
        "/api/restaurants",
        id
    );

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <section className="mx-auto max-w-5xl">
            <FoodCreateForm
                restaurant={restaurant}
                sellerEmail={session?.user?.email || ""}
            />
        </section>
    );
};

export default SpacificRestaurantBasedFoodAddingPage;