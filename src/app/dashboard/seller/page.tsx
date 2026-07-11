import SellerDashboardSections from "@/components/dashboard/seller/SellerDashboardSections";
import { GetRestaurantBySellerEmail } from "@/lib/api/restaurants";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
    FaStore,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const SellerDashboardHomePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const restaurants = await GetRestaurantBySellerEmail(
        session?.user?.email || ""
    );

    const approved = restaurants.filter(
        (r: any) => r.status === "approved"
    ).length;

    const pending = restaurants.filter(
        (r: any) => r.status === "pending"
    ).length;

    const rejected = restaurants.filter(
        (r: any) => r.status === "rejected"
    ).length;

    return (
        <section className="space-y-8">

            {/* Hero */}

            <div className="rounded-3xl bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 p-8 text-white shadow-xl">

                <h1 className="text-4xl font-bold">
                    Welcome back, {session?.user?.name}! 👋
                </h1>

                <p className="mt-3 text-red-50">
                    Manage your restaurants, monitor approvals and grow your
                    business from one place.
                </p>

            </div>

            {/* Statistics */}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-2xl border border-red-100 bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <FaStore className="mb-4 text-4xl text-red-500" />

                    <p className="text-gray-500">
                        Total Restaurants
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-red-500">
                        {restaurants.length}
                    </h2>

                </div>

                <div className="rounded-2xl border border-green-100 bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <FaCheckCircle className="mb-4 text-4xl text-green-500" />

                    <p className="text-gray-500">
                        Approved
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-green-500">
                        {approved}
                    </h2>

                </div>

                <div className="rounded-2xl border border-yellow-100 bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <FaClock className="mb-4 text-4xl text-yellow-500" />

                    <p className="text-gray-500">
                        Pending
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-yellow-500">
                        {pending}
                    </h2>

                </div>

                <div className="rounded-2xl border border-red-100 bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <FaTimesCircle className="mb-4 text-4xl text-red-500" />

                    <p className="text-gray-500">
                        Rejected
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-red-500">
                        {rejected}
                    </h2>

                </div>

            </div>

            {/* Management Panel */}

            <SellerDashboardSections
                restaurants={restaurants}
            />

        </section>
    );
};

export default SellerDashboardHomePage;