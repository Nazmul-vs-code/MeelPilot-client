import Link from "next/link";
import {
    FaBan,
    FaArrowLeft,
    FaHome,
} from "react-icons/fa";


const UnauthorizedPage = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-6">

            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-red-100 bg-white p-10 text-center shadow-2xl">

                {/* Glow */}

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-300/30 blur-3xl" />

                <div className="relative z-10">


                    {/* Icon */}

                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">

                        <FaBan className="text-5xl text-red-500" />

                    </div>


                    <h1 className="mt-8 text-4xl font-bold text-gray-900">

                        Access Denied 🚫

                    </h1>


                    <p className="mt-4 text-gray-500">

                        Sorry, you don't have permission to access this page.
                        Please contact the administrator if you think this is a mistake.

                    </p>


                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">


                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                        >

                            <FaHome />

                            Home

                        </Link>



                        <Link
                            href="javascript:history.back()"
                            className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-6 py-3 font-semibold text-red-500 transition hover:bg-red-50"
                        >

                            <FaArrowLeft />

                            Go Back

                        </Link>


                    </div>


                </div>

            </div>

        </main>
    );
};


export default UnauthorizedPage;