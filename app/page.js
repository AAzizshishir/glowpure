import Banner from "@/components/Banner";
import FeatureProducts from "@/components/FeatureProducts";
import ProductsMarquee from "@/components/Marquee";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProductsMarquee />
      <Services />
      <FeatureProducts />
    </div>
  );
}
