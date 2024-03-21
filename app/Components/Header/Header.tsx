import Image from "next/image";
import Link from "next/link";
import Searchbar from "@/app/Components/Header/Searchbar";
import Navbar from "./Navbar";

const Header = ({ placeholder }: { placeholder?: string }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="container mx-auto grid grid-cols-3 relative">
        <Link href={`/`} className=" relative flex items-center h-10 my-auto">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1358/0*NChTo-XqLOxLabIW"
            alt=""
            fill
            className="object-contain object-left"
          />
        </Link>
        <Searchbar placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
