import Homepage from "@/components/section/Homepage";
import Menu from "@/components/section/Menu";
import type { Metadata } from "next";
import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: "Melino Bakery",
  description: "Melino Bakery toko kue terbaik di sumatera barat",
};

export default function Home() {
  return (
    <div>
      <section id="homepage" className="min-h-screen">
        <Homepage stardom={Stardom.className} />
      </section>
      <section id="menu" className="min-h-screen bg-CosmicLatter">
        <Menu stardom={Stardom.className} />
      </section>
    </div>
  );
}
