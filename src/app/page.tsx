import Hero from "@/components/Home page/hero/Hero";
import LetestFood from "@/components/Home page/LetestFood";
import TopRestaurants from "@/components/Home page/TopRestaurants";


export default function Home() {
  return (
    
    <div className="w-10/12 mx-auto flex flex-col gap-10 my-10">
      <Hero />
      <TopRestaurants />
      <LetestFood />
    </div>
  );
}
