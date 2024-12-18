"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="relative top-3 flex justify-center">
      <nav className="fixed flex gap-1 justify-center items-center backdrop-blur border md:gap-5  border-slate-500 rounded-full bg-white/10">
        <Link href="/" className="nav-item">
          Home
        </Link>
        <Link href="/projects" className="nav-item">
          Projects
        </Link>
        <Link href="/about" className="nav-item">
          About
        </Link>
        <Link
          href="/contact"
          className="nav-item bg-white/85 text-gray-800 hover:text-white/80 hover:bg-sky-800 "
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
