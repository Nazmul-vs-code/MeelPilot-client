import { GetRestaurants } from "@/lib/api/restaurants";
import Image from "next/image";
import Link from "next/link";
import {
    FaArrowRight,
    FaMapMarkerAlt,
    FaStar,
    FaStore,
} from "react-icons/fa";

const TopRestaurants = async () => {
    const restaurants = await GetRestaurants('/api/restaurants');

    const popularRestaurants = restaurants
        .filter((restaurant: any) => restaurant.status === "approved")
        .slice(0, 3);

    return (
        <section className="space-y-10">

            {/* Header */}

            <div className="flex items-end justify-between">

                <div>

                    <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-500">
                        🍴 Popular Restaurants
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900">
                        Top Rated Restaurants And Approved By Community
                    </h2>

                    <p className="mt-2 max-w-2xl text-gray-500">
                        Discover delicious meals from our trusted restaurant
                        partners across Bangladesh.
                    </p>

                </div>

                <Link
                    href="/restaurants"
                    className="hidden items-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-500 transition hover:bg-red-500 hover:text-white lg:flex"
                >
                    View All

                    <FaArrowRight />
                </Link>

            </div>

            {/* Cards */}

            <div className="grid gap-8 lg:grid-cols-3">

                {popularRestaurants.map((restaurant: any) => (

                    <Link
                        key={restaurant._id}
                        href={`/restaurants/${restaurant._id}`}
                        className="group overflow-hidden rounded-3xl border border-red-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >

                        {/* Image */}

                        <div className="relative h-64 overflow-hidden">

                            <Image
                                src={restaurant.image}
                                alt={restaurant.restaurantName}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />

                            <div className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                                Approved

                            </div>

                        </div>

                        {/* Content */}

                        <div className="space-y-5 p-6">

                            <div>

                                <h3 className="line-clamp-1 text-2xl font-bold text-red-500">

                                    {restaurant.restaurantName}

                                </h3>

                                <p className="mt-2 flex items-center gap-2 text-gray-500">

                                    <FaMapMarkerAlt className="text-yellow-500" />

                                    {restaurant.location}

                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="rounded-2xl bg-red-50 p-4">

                                    <div className="flex items-center gap-2 text-red-500">

                                        <FaStore />

                                        <span className="text-sm font-medium">
                                            Restaurant
                                        </span>

                                    </div>

                                    <h4 className="mt-2 font-bold text-gray-800">

                                        Open Now

                                    </h4>

                                </div>

                                <div className="rounded-2xl bg-yellow-50 p-4">

                                    <div className="flex items-center gap-2 text-yellow-600">

                                        <FaStar />

                                        <span className="text-sm font-medium">
                                            Rating
                                        </span>

                                    </div>

                                    <h4 className="mt-2 font-bold text-gray-800">

                                        ⭐ 4.9

                                    </h4>

                                </div>

                            </div>

                            <div className="flex items-center justify-between border-t border-red-100 pt-5">

                                <span className="font-semibold text-red-500">
                                    Explore Menu
                                </span>

                                <div className="rounded-full bg-yellow-400 p-3 text-white transition-all duration-300 group-hover:bg-red-500">

                                    <FaArrowRight />

                                </div>

                            </div>

                        </div>

                    </Link>

                ))}

            </div>

            {/* Mobile Button */}

            <div className="flex justify-center lg:hidden">

                <Link
                    href="/restaurants"
                    className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                    View All Restaurants
                </Link>

            </div>

        </section>
    );
};

export default TopRestaurants;