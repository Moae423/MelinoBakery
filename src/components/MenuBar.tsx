import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SquareMenu } from "lucide-react";
import Link from "next/link";
interface MenuBarProps {
  montserrat: string;
}

export const MenuBar = ({ montserrat }: MenuBarProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SquareMenu className="lg:hidden block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="my-8 mx-3 w-3xs bg-CosmicLatter">
        <DropdownMenuLabel className={`${montserrat}`}>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`#homepage`}>home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`#menu`}>Menu</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Visit Us</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
