"use client";

import Lottie from "lottie-react";

import cat_purple from "@/data/cat_purple.json";

export default function CatAnimation() {
  return (
   <div className="w-full max-w-[300px] sm:max-w-[60%] md:max-w-[420px] lg:max-w-[550px] aspect-square">
  <Lottie animationData={cat_purple} loop autoplay className="h-full w-full" />
</div>
  );
}