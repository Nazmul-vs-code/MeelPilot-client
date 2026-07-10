"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHamburger } from "react-icons/fa";

const Logo = () => {
    return (
        <Link href="/">
            <motion.div
                className="flex items-center gap-2 cursor-pointer select-none"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }}
            >
                <motion.div
                    animate={{
                        y: [0, -4, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <FaHamburger className="text-3xl text-orange-500" />
                </motion.div>

                <h1 className="text-2xl font-black tracking-wide">
                    Meal<span className="text-orange-500">Pilot</span>
                </h1>
            </motion.div>
        </Link>
    );
};

export default Logo;