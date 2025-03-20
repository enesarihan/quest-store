import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant={"ghost"}>
          <Link href={"/cart"}>
            <ShoppingCart /> CART
          </Link>
        </Button>
        <Button asChild>
          <Link href={"/sign-in"}>
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 p-6">
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
            <SheetDescription className="text-sm text-gray-500">
              Quick access to features
            </SheetDescription>
            <div className="flex flex-col gap-2 w-full">
              <ModeToggle />
              <Button
                asChild
                variant="ghost"
                className="flex items-center gap-2 w-full"
              >
                <Link href="/cart">
                  <ShoppingCart size={18} /> Cart
                </Link>
              </Button>
              <Button asChild className="flex items-center gap-2 w-full">
                <Link href="/sign-in">
                  <UserIcon size={18} /> Sign In
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
