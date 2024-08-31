import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-black text-white py-2">
      <div className="flex items-center justify-between px-5 py-2 m-2 space-x-4 rounded-full font-bold">
        {/* Logo or Home Link */}
        <Link href="/" className="flex items-center space-x-4">
          <h1 className="text-2xl md:text-3xl font-bold italic hover:underline underline-offset-2">
            HA
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4 hidden md:flex">
          <Link href="/blog" className="hover:underline underline-offset-2">
            Blog
          </Link>
          <Link href="/about" className="hover:underline underline-offset-2">
            About
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-2">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button (Optional) */}
        <div className="flex md:hidden">
          <button
            className="p-2 text-text2"
            aria-label="Open Menu"
            
          >
            ☰
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
