import FoodDetails from "@/components/food/FoodDetails";
import { GetFoodById } from "@/lib/api/food";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const FoodDetailsPage = async ({
    params,
}: Props) => {
    const { id } = await params;

    const food = await GetFoodById(id);
    // console.log(food , ' food in details page ')

    return (
        <section className="mx-auto w-[80%] py-10">
            <FoodDetails food={food} />
        </section>
    );
};

export default FoodDetailsPage;