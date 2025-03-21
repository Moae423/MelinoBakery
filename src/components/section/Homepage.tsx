"use client";
import Bakery from "@/assets/images/94251.jpg";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

interface HomepageProps {
  stardom: string;
}

const Homepage: React.FC<HomepageProps> = ({ stardom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px 0px 0px" });

  function handleWa() {
    window.open(
      "https://wa.me/6283188003716?text=Haloo%20mau%20pesan%20roti%20nya%20dong"
    );
  }
  return (
    <div
      className="flex items-center min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right top, #E4E2D6 34%, rgba(0,0,0,0)), url(${Bakery.src})`,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ y: [50, 100], opacity: 0 }}
        animate={
          isInView ? { y: [-20, 50], opacity: 1 } : { y: [50, 50], opacity: 0 }
        }
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="container  mx-auto"
      >
        <div
          className={`max-w-sm md:max-w-xl lg:max-w-2xl mx-auto md:mx-0 md:pl-12 `}
        >
          <h1
            className={`text-2xl md:text-4xl text-center md:text-start   my-3 font-semibold ${stardom}`}
          >
            Indulge in the Warmth of Freshly Baked Delights
          </h1>
          <p className="text-lg text-center md:text-start  font-sans font-normal">
            Experience the joy of artisanal bread, heavenly pastries, and
            decadent cakes – made fresh daily with the finest ingredients.
          </p>
          <div
            className={`flex justify-center md:justify-start my-3 gap-3 ${montserrat.className}`}
          >
            <Button
              onClick={handleWa}
              aria-label="order now"
              variant={"default"}
              className="px-4 py-5 text-lg bg-Carribean cursor-pointer hover:scale-105 active:scale-110 md:active:scale-100"
            >
              Order Now
            </Button>
            <Button
              aria-label="contact us"
              variant={"default"}
              className="px-4 py-5 text-lg bg-CosmicLatter hover:text-CosmicLatter hover:scale-105 active:scale-100 text-Jet cursor-pointer"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Homepage;
