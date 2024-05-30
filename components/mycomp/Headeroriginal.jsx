import { Button } from "@/components/ui/button";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./origmobilenav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl">
            Issam <span className="text-accent  text-xl">Dev</span>
          </h1>
        </Link>

        {/* DESCKTOP NAV && hiore me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
        {/* mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
