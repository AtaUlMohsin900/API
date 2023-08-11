import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-blue-200 py-2 px-4 border-b-[#e63bf4] ">
      <Link
        href="/"
        className="font-medium bg-[#cb64ff] text-white px-4 py-2 rounded-md"
      >
        Book API
      </Link>
      <Link
        href="/register"
        className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Regiter
      </Link>
    </header>
  );
};

export default Header;
