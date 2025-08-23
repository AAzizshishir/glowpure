"use client";

import { Truck, Phone, RefreshCw, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all US orders or orders above $200",
  },
  {
    icon: Phone,
    title: "Support 24/7",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: RefreshCw,
    title: "7 Days Return",
    description: "Simply return it within 7 days for an exchange.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Secure",
    description: "We ensure secure payment with PEV",
  },
];

export default function Services() {
  return (
    <section className="mt-80 lg:my-16">
      <div className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-4 border-r-2 last:border-r-0"
          >
            <feature.icon className="w-18 h-10 text-gray-500" />
            <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
