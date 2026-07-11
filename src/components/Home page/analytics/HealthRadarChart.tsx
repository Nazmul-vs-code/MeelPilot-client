"use client";

import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    {
        category: "Vegetarian",
        score: 95,
        fullMark: 100,
    },
    {
        category: "Healthy Bowl",
        score: 90,
        fullMark: 100,
    },
    {
        category: "Non-Veg",
        score: 76,
        fullMark: 100,
    },
    {
        category: "Beverage",
        score: 68,
        fullMark: 100,
    },
    {
        category: "Dessert",
        score: 45,
        fullMark: 100,
    },
    {
        category: "Fast Food",
        score: 35,
        fullMark: 100,
    },
];

const HealthRadarChart = () => {
    return (
        <div className="flex flex-col">

            <div className="mb-6">

                <h3 className="text-2xl font-bold text-red-500">
                    Category Health Score
                </h3>

                <p className="mt-2 text-gray-500">
                    A visual comparison of our food categories based on
                    nutritional quality and healthier eating recommendations.
                </p>

            </div>

            <div className="h-[430px] w-full transition duration-500 hover:scale-[1.02]">

                <ResponsiveContainer width="100%" height="100%">

                    <RadarChart
                        data={data}
                        outerRadius="72%"
                    >

                        <defs>

                            <linearGradient
                                id="healthGradient"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="1"
                            >

                                <stop
                                    offset="0%"
                                    stopColor="#ef4444"
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#facc15"
                                />

                            </linearGradient>

                        </defs>

                        <PolarGrid
                            stroke="#fecaca"
                            strokeDasharray="4 4"
                        />

                        <PolarAngleAxis
                            dataKey="category"
                            tick={{
                                fill: "#dc2626",
                                fontSize: 14,
                                fontWeight: 700,
                            }}
                        />

                        <PolarRadiusAxis
                            angle={30}
                            domain={[0, 100]}
                            tick={{
                                fill: "#9ca3af",
                                fontSize: 11,
                            }}
                        />

                        <Tooltip
                            contentStyle={{
                                borderRadius: 18,
                                border: "1px solid #fecaca",
                                background: "#fff",
                            }}
                        />

                        <Radar
                            dataKey="score"
                            stroke="#ef4444"
                            fill="url(#healthGradient)"
                            fillOpacity={0.65}
                            strokeWidth={3}
                        />

                    </RadarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default HealthRadarChart;