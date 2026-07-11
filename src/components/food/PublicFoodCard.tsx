import Image from "next/image";
import Link from "next/link";
import {
    FaArrowRight,
    FaClock,
    FaDollarSign,
    FaStore,
    FaUtensils,
} from "react-icons/fa";

type Food = {
    _id: string;
    foodName: string;
    image: string;
    restaurantName: string;
    price: number;
    category: string;
    preparationTime: string;
};

type Props = {
    food: Food;
};

const PublicFoodCard = ({ food }: Props) => {
    return (
        <Link
            href={`/foods/${food._id}`}
            className="group overflow-hidden rounded-3xl border border-red-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative h-64 overflow-hidden">

                <Image
                    src={food.image || ''}
                    alt={food.foodName}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute right-4 top-4 rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    {food.category}
                </div>

            </div>

            <div className="space-y-5 p-6">

                <div>

                    <h2 className="line-clamp-1 text-2xl font-bold text-red-500">
                        {food.foodName}
                    </h2>

                    <p className="mt-2 flex items-center gap-2 text-gray-500">
                        <FaStore className="text-yellow-500" />
                        {food.restaurantName}
                    </p>

                </div>

                <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-red-50 p-3">

                        <p className="mb-1 flex items-center gap-2 text-xs text-gray-500">
                            <FaDollarSign />
                            Price
                        </p>

                        <h3 className="text-xl font-bold text-red-500">
                            ${food.price}
                        </h3>

                    </div>

                    <div className="rounded-xl bg-yellow-50 p-3">

                        <p className="mb-1 flex items-center gap-2 text-xs text-gray-500">
                            <FaClock />
                            Ready In
                        </p>

                        <h3 className="font-semibold text-yellow-600">
                            {food.preparationTime}
                        </h3>

                    </div>

                </div>

                <div className="flex items-center justify-between border-t border-red-100 pt-4">

                    <div className="flex items-center gap-2 font-medium text-red-500">

                        <FaUtensils />

                        View Details

                    </div>

                    <div className="rounded-full bg-yellow-400 p-3 text-white transition-all duration-300 group-hover:bg-red-500">
                        <FaArrowRight />
                    </div>

                </div>

            </div>
        </Link>
    );
};

export default PublicFoodCard;