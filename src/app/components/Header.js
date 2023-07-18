import Image from "next/image";
import {
  HomeIcon,
  UserIcon,
  MagnifyingGlassIcon,
  CircleStackIcon,
  CheckBadgeIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-3 mt-5 justify-between items-center h-auto">
      <div className="flex flex-row justify-evenly max-w-xl xl:max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CircleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain w-auto h-auto"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={150}
        height={75}
        alt="logo"
      />
    </header>
  );
}
