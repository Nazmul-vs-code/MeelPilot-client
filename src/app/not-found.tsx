import Link from "next/link";
import {
    FaHome,
    FaSearch,
    FaUtensils,
} from "react-icons/fa";


const NotFound = () => {
    return (

        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-6">


            <div className="w-full max-w-xl rounded-3xl border border-red-100 bg-white p-12 text-center shadow-2xl">


                {/* Icon */}

                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-yellow-100">

                    <FaUtensils className="text-6xl text-yellow-500" />

                </div>



                <h1 className="mt-8 text-7xl font-black text-red-500">

                    404

                </h1>


                <h2 className="mt-3 text-3xl font-bold text-gray-900">

                    Page Not Found 🍔

                </h2>



                <p className="mt-4 text-gray-500">

                    Looks like this page went missing.
                    Maybe it was delivered to the wrong address? 😄

                </p>



                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">


                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                    >

                        <FaHome />

                        Back Home

                    </Link>



                    <Link
                        href="/restaurants"
                        className="flex items-center justify-center gap-2 rounded-xl border border-yellow-300 px-7 py-3 font-semibold text-yellow-600 transition hover:bg-yellow-50"
                    >

                        <FaSearch />

                        Explore Food

                    </Link>


                </div>


            </div>


        </main>

    );
};


export default NotFound;