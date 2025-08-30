import Marquee from "react-fast-marquee";

const productNames = [
  "Radiance Revival Serum",
  "HydraBloom Toner",
  "Velvet Dew Moisturizer",
  "GlowMist Essence",
  "LumiClay Detox Mask",
  "SilkTouch Cleanser",
  "PureGlow Elixir",
  "BrightNest Eye Cream",
  "AuraShield SPF 50",
  "RoseQuartz Lip Therapy",
  "ZenDrop Facial Oil",
  "CloudSkin Night Cream",
  "FreshPetal Face Wash",
  "GoldenRoot Brightening Gel",
  "MoonMilk Hydration Balm",
];

const ProductsMarquee = () => {
  return (
    <Marquee className="text-xl py-6 border-b uppercase tracking-wide">
      {productNames.map((name, index) => (
        <span key={index} className="mx-4 inline-block">
          {name} <span className="ml-5">|</span>
        </span>
      ))}
    </Marquee>
  );
};

export default ProductsMarquee;
