"use client";

import HeroSlider from "./HeroSlider";

const Hero = () => {
    return (
        <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">

            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-red-300/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-[130px]" />

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(#ef4444 1px, transparent 1px),
                        linear-gradient(90deg,#ef4444 1px,transparent 1px)
                    `,
                    backgroundSize: "45px 45px",
                }}
            />

            <HeroSlider />
        </section>
    );
};

export default Hero;