"use client";

import { useMemo } from "react";
import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { FaSearch } from "react-icons/fa";
import PublicFoodCard from "./PublicFoodCard";

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
    foods: Food[];
};

const FoodList = ({ foods }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "All";
    const restaurant = searchParams.get("restaurant") || "All";
    const sort = searchParams.get("sort") || "default";

    const updateQuery = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (
            value === "" ||
            value === "All" ||
            value === "default"
        ) {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        router.replace(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    const restaurants = [
        "All",
        ...new Set(foods.map((food) => food.restaurantName)),
    ];

    const filteredFoods = useMemo(() => {
        let result = [...foods];

        if (search) {
            result = result.filter((food) =>
                food.foodName
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        if (category !== "All") {
            result = result.filter(
                (food) => food.category === category
            );
        }

        if (restaurant !== "All") {
            result = result.filter(
                (food) =>
                    food.restaurantName === restaurant
            );
        }

        if (sort === "low") {
            result.sort(
                (a, b) =>
                    Number(a.price) - Number(b.price)
            );
        }

        if (sort === "high") {
            result.sort(
                (a, b) =>
                    Number(b.price) - Number(a.price)
            );
        }

        return result;
    }, [
        foods,
        search,
        category,
        restaurant,
        sort,
    ]);

    return (
        <>
            {/* Filters */}

            <div className="mb-8 grid gap-4 rounded-3xl border border-red-100 bg-white p-6 shadow md:grid-cols-4">

                {/* Search */}

                <label className="input input-bordered flex items-center gap-2">

                    <FaSearch className="text-red-500" />

                    <input
                        type="text"
                        placeholder="Search foods..."
                        value={search}
                        onChange={(e) =>
                            updateQuery(
                                "search",
                                e.target.value
                            )
                        }
                    />

                </label>

                {/* Category */}

                <select
                    className="select select-bordered"
                    value={category}
                    onChange={(e) =>
                        updateQuery(
                            "category",
                            e.target.value
                        )
                    }
                >
                    <option>All</option>
                    <option>Vegetarian</option>
                    <option>Non-Vegetarian</option>
                    <option>Fast Food</option>
                    <option>Dessert</option>
                    <option>Beverage</option>
                </select>

                {/* Restaurant */}

                <select
                    className="select select-bordered"
                    value={restaurant}
                    onChange={(e) =>
                        updateQuery(
                            "restaurant",
                            e.target.value
                        )
                    }
                >
                    {restaurants.map((res) => (
                        <option
                            key={res}
                            value={res}
                        >
                            {res}
                        </option>
                    ))}
                </select>

                {/* Sort */}

                <select
                    className="select select-bordered"
                    value={sort}
                    onChange={(e) =>
                        updateQuery(
                            "sort",
                            e.target.value
                        )
                    }
                >
                    <option value="default">
                        Sort By
                    </option>

                    <option value="low">
                        Price: Low → High
                    </option>

                    <option value="high">
                        Price: High → Low
                    </option>
                </select>
            </div>

            {/* Results Count */}

            <div className="mb-6 flex items-center justify-between">

                <h3 className="text-xl font-bold text-red-500">
                    Showing {filteredFoods.length} Food
                    {filteredFoods.length !== 1 && "s"}
                </h3>

                {(search ||
                    category !== "All" ||
                    restaurant !== "All" ||
                    sort !== "default") && (
                    <button
                        onClick={() =>
                            router.replace(pathname)
                        }
                        className="btn btn-outline btn-error"
                    >
                        Clear Filters
                    </button>
                )}

            </div>

            {/* Cards */}

            <div className="max-h-[1350px] overflow-y-auto pr-2">

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {filteredFoods.map((food) => (
                        <PublicFoodCard
                            key={food._id}
                            food={food}
                        />
                    ))}

                </div>

                {filteredFoods.length === 0 && (
                    <div className="py-20 text-center text-lg font-medium text-gray-500">
                        😔 No foods found with the selected filters.
                    </div>
                )}

            </div>
        </>
    );
};

export default FoodList;