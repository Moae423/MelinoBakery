"use client";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { MenuBar } from "@/components/MenuBar";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const Stardom = localFont({
  src: [
    {
      path: "../app/fonts/Stardom-Regular.woff",
    },
    {
      path: "../app/fonts/Stardom-Regular.woff2",
    },
  ],
  display: "swap",
});

const Header = () => {
  function handleWa() {
    window.open(
      "https://wa.me/6283188003716?text=Haloo%20mau%20pesan%20roti%20nya%20dong"
    );
  }
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }} // Mulai dari atas dan transparan
      animate={{ y: 0, opacity: 1 }} // Hilang saat keluar viewport
      transition={{ ease: "easeInOut", duration: 0.7 }}
      className="flex bg-CosmicLatter shadow-2xl shadow-Jet items-center justify-between fixed px-8 py-2 md:py-3 top-5 left-0 right-0 z-50 rounded-full max-w-xs md:max-w-2xl lg:max-w-7xl mx-auto"
    >
      <Link href="/">
        <Button
          aria-label="melino bakery"
          variant={"ghost"}
          className={`cursor-pointer text-xl md:text-2xl font-bold tracking-widest ${Stardom.className}`}
        >
          Melino Bakery
        </Button>
      </Link>
      <ul className="lg:flex items-center gap-5 hidden">
        <li>
          <Link href={`#homepage`}>
            <Button
              aria-label="home"
              variant={"link"}
              className={`cursor-pointer transition duration-300 text-md ${montserrat.className}`}
            >
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Button
            aria-label="about us"
            variant={"link"}
            className="cursor-pointer transition duration-300 text-md"
          >
            About Us
          </Button>
        </li>
        <li>
          <Link href={`#menu`}>
            <Button
              aria-label="menu"
              variant={"link"}
              className="cursor-pointer transition duration-300 text-md"
            >
              Menu
            </Button>
          </Link>
        </li>
        <li>
          <Button
            aria-label="visit us"
            variant={"link"}
            className="cursor-pointer transition duration-300 text-md"
          >
            Visit Us
          </Button>
        </li>
      </ul>
      <div className="block lg:flex md:flex">
        <MenuBar montserrat={montserrat.className} />
        <Button
          onClick={handleWa}
          aria-label="order now"
          className={`${montserrat.className} hidden lg:block cursor-pointer hover:scale-105 hover:bg-Jet rounded-3xl transition duratiton-300 bg-Carribean active:scale-100  `}
        >
          Order Now
        </Button>
      </div>
    </motion.nav>
  );
};
export default Header;
