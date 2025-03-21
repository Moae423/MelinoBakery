"use client";
import Image from "next/image";
import { Roti } from "@/data/roti";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
interface MenuProps {
  stardom: string;
}

//  initial={{ y: -100, opacity: 0 }}
//   animate={{ y: 0, opacity: 1 }}
//   transition={{ ease: "easeInOut", duration: 0.7 }}

const Menu = ({ stardom }: MenuProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px 0px 0px" });
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex  justify-center">
          <div className="py-8 my-4">
            <h1
              className={`text-2xl md:text-4xl font-bold max-w-xs md:max-w-md text-center ${stardom}`}
            >
              The Repinot Tor Cuest Theotect Basoand
            </h1>
          </div>
        </div>
        {Roti.map((item) => (
          <motion.div
            ref={ref}
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: isInView ? 0 : item.position === "left" ? 0 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ ease: "easeInOut", duration: 1 }}
            key={item.id}
            className={`flex flex-col lg:flex-row items-center gap-3  justify-center px-3 md:p-0 lg:p-0 ${
              item.position === "left" ? "flex-col lg:flex-row-reverse" : ""
            } `}
          >
            <div className="max-w-xl mx-2">
              <h1
                className={`text-2xl md:text-3xl font-semibold my-3 ${stardom}`}
              >
                {item.menuTitle}
              </h1>
              <p className="text-xl font-sans">{item.menuDeskripsi}</p>
            </div>
            {item.image.map((itemImage, index) => (
              <Image
                className="w-56 md:w-60 lg:w-96"
                key={index}
                src={itemImage}
                width={400}
                height={400}
                alt={item.menuTitle}
              />
            ))}
          </motion.div>
        ))}
        <div className="text-center ">
          <Button
            aria-label="See More"
            variant={"default"}
            className="px-4 py-3 my-6 font-stardom  text-lg bg-Jet shadow-sm hover:bg-CosmicLatter hover:text-Jet hover:border-3 hover:border-Jet cursor-pointer hover:scale-105 active:scale-100"
          >
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Menu;
