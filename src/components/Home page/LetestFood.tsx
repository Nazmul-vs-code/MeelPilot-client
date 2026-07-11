import PublicFoodCard from "@/components/food/PublicFoodCard";
import { GetFoods } from "@/lib/api/food";
import Link from "next/link";
import { FaArrowRight, FaHamburger } from "react-icons/fa";

const LetestFood = async () => {
    const foods = await GetFoods();

    const latestFoods = foods
        .sort(
            (a: any, b: any) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        .slice(0, 8);

    return (
        <section className="space-y-10">

            {/* Header */}

            <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">

                <div>

                    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                        🍔 Freshly Added
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-red-500">
                        Latest Foods
                    </h2>

                    <p className="mt-2 max-w-2xl text-gray-500">
                        Explore our newest dishes added by verified restaurants.
                        Fresh meals are waiting for you every day.
                    </p>

                </div>

                <Link
                    href="/foods"
                    className="flex items-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
                >
                    View All Foods

                    <FaArrowRight />
                </Link>

            </div>

            {/* Foods */}

            {latestFoods.length ? (

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {latestFoods.map((food: any) => (

                        <PublicFoodCard 
                            key={food._id}
                            food={food}
                        />

                    ))}

                </div>

            ) : (

                <div className="rounded-3xl border-2 border-dashed border-red-200 bg-white py-24 text-center">

                    <FaHamburger className="mx-auto mb-5 text-6xl text-red-300" />

                    <h3 className="text-3xl font-bold text-red-500">
                        No Foods Available
                    </h3>

                    <p className="mt-3 text-gray-500">
                        Fresh meals will appear here soon.
                    </p>

                </div>

            )}

        </section>
    );
};

export default LetestFood;