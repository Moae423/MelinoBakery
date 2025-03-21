import FoccaciaHerb from "@/assets/images/Foccacia.png";
import FoccaciaGolden from "@/assets/images/Foccacia Herb.png";
import Challah from "@/assets/images/Challah.png";
import Challah2 from "@/assets/images/Challah new.png";
import { StaticImageData } from "next/image";

interface Roti {
  id: number;
  menuTitle: string;
  menuDeskripsi: string;
  position: string;
  image: (string | StaticImageData)[];
}

export const Roti: Roti[] = [
  {
    id: 1,
    menuTitle: "Focaccia",
    menuDeskripsi:
      "Focaccia adalah roti khas Italia yang terkenal dengan tekstur lembut dan cita rasa yang kaya. Terbuat dari adonan yang mirip dengan pizza, Focaccia sering dipadukan dengan minyak zaitun, rempah-rempah, dan topping seperti rosemary atau keju parmesan. Roti ini cocok dijadikan camilan, pendamping hidangan utama, atau dinikmati dengan saus favorit Anda. 🍞",
    position: "right",
    image: [FoccaciaHerb, FoccaciaGolden],
  },
  {
    id: 2,
    menuTitle: "Challah",
    menuDeskripsi:
      "Challah adalah roti tradisional yang lembut dengan rasa manis yang khas. Dibuat dengan adonan kaya telur, roti ini memiliki tekstur empuk dan lapisan luar yang mengilap. Cocok untuk dinikmati dengan mentega, selai, atau sebagai roti panggang yang lezat. 🥐",
    position: "left",
    image: [Challah, Challah2],
  },
];
