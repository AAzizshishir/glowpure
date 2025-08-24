import Banner from "@/components/Banner";
import FeatureProducts from "@/components/FeatureProducts";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <FeatureProducts />
    </div>
  );
}
