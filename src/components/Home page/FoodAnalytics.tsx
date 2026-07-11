"use client";

import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import {
    FaChartLine,
    FaHamburger,
} from "react-icons/fa";

const data = [
    {
        category: "Fast Food",
        foods: 28,
        orders: 450,
        revenue: 8400,
    },
    {
        category: "Vegetarian",
        foods: 18,
        orders: 260,
        revenue: 4700,
    },
    {
        category: "Non Veg",
        foods: 24,
        orders: 390,
        revenue: 7200,
    },
    {
        category: "Dessert",
        foods: 14,
        orders: 170,
        revenue: 2600,
    },
    {
        category: "Beverage",
        foods: 16,
        orders: 210,
        revenue: 3200,
    },
];

const FoodAnalytics = () => {
    return (
        <section className="rounded-3xl border border-red-100 bg-white p-8 shadow-lg">

            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-500">
                        📊 Analytics
                    </span>

                    <h2 className="mt-4 flex items-center gap-3 text-3xl font-bold text-red-500">

                        <FaChartLine />

                        Food Category Analytics

                    </h2>

                    <p className="mt-2 text-gray-500">
                        Overview of food categories, total foods,
                        orders and generated revenue.
                    </p>

                </div>

                <div className="hidden rounded-full bg-yellow-100 p-5 text-4xl text-yellow-500 lg:block">

                    <FaHamburger />

                </div>

            </div>

            {/* Chart */}

            <div className="h-[500px] w-full">

                <ResponsiveContainer width="100%" height="100%">

                    <ComposedChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 10,
                            left: 10,
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="4 4"
                            stroke="#f3f4f6"
                        />

                        <XAxis
                            dataKey="category"
                            tick={{
                                fill: "#ef4444",
                                fontWeight: 600,
                            }}
                        />

                        <YAxis />

                        <Tooltip
                            cursor={{
                                fill: "#fff7ed",
                            }}
                            contentStyle={{
                                borderRadius: 16,
                                border: "1px solid #fecaca",
                            }}
                        />

                        <Legend />

                        {/* Revenue */}

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            fill="#fde68a"
                            stroke="#f59e0b"
                            fillOpacity={0.45}
                            name="Revenue ($)"
                        />

                        {/* Foods */}

                        <Bar
                            dataKey="foods"
                            fill="#ef4444"
                            radius={[8, 8, 0, 0]}
                            barSize={40}
                            name="Foods"
                        />

                        {/* Orders */}

                        <Line
                            type="monotone"
                            dataKey="orders"
                            stroke="#f59e0b"
                            strokeWidth={4}
                            dot={{
                                r: 6,
                                fill: "#f59e0b",
                            }}
                            activeDot={{
                                r: 8,
                            }}
                            name="Orders"
                        />

                    </ComposedChart>

                </ResponsiveContainer>

            </div>

        </section>
    );
};

export default FoodAnalytics;