import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex gap-3">
      <Link
        className="text-orange-800 font-bold mr-auto text-xl hover:underline"
        href="/"
      >
        Gaming City
      </Link>
      <Link className="text-orange-800 hover:underline" href="/reviews">
        Reviews
      </Link>
      <Link
        className="text-orange-800 hover:underline"
        prefetch={false}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}

export default NavBar;
