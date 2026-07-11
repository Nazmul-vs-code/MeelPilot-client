import FoodList from "@/components/food/FoodList";
import { GetFoods } from "@/lib/api/food";
import { Suspense } from "react";
import { FaHamburger } from "react-icons/fa";

const PublicFoodPage = async () => {
    const foods = await GetFoods();

    return (
        <section className="mx-auto w-[80%] space-y-12 py-10">

            {/* Hero */}

            <div className="rounded-[2rem] bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 px-10 py-16 text-white shadow-2xl">

                <h1 className="text-5xl font-extrabold">
                    🍽️ Discover Amazing Foods
                </h1>

                <p className="mt-4 max-w-3xl text-lg text-red-50">
                    Browse delicious meals prepared by verified restaurants.
                    Find your next favorite dish with just a few clicks.
                </p>

            </div>

            {/* Header */}

            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

                <div>

                    <h2 className="text-4xl font-bold text-red-500">
                        Featured Foods
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Freshly prepared meals from our trusted restaurant partners.
                    </p>

                </div>

                <div className="rounded-full bg-red-50 px-6 py-3 text-lg font-bold text-red-500 shadow">

                    {foods.length} Food Item{foods.length !== 1 && "s"}

                </div>

            </div>

            {foods.length ? (

                <Suspense fallback={<div className="py-10 text-center text-gray-500">Loading food filters…</div>}>
                    <FoodList foods={foods} />
                </Suspense>

            ) : (

                <div className="rounded-3xl border-2 border-dashed border-red-200 bg-white py-24 text-center shadow">

                    <FaHamburger className="mx-auto mb-6 text-7xl text-red-300" />

                    <h2 className="text-3xl font-bold text-red-500">
                        No Foods Available
                    </h2>

                    <p className="mt-3 text-gray-500">
                        New delicious dishes will appear here soon.
                    </p>

                </div>

            )}

        </section>
    );
};

export default PublicFoodPage;