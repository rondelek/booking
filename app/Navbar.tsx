import Image from "next/image";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex items-center p-4 justify-between">
      <Bars3CenterLeftIcon className="h-8 w-8 cursor-pointer opacity-70" />
      <div className="flex -translate-x-1">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <h2 className="text-2xl font-bold text-main-dark">Booking.</h2>
      </div>
      <UserCircleIcon className="h-7 opacity-90" />
    </nav>
  );
}
