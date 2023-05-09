"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationProps = {
  navigation: NavigationLink[];
  stacked?: boolean;
  onClick?: () => void;
};

export type NavigationLink = { link: string; text: string };

const Navigation = ({ navigation, stacked, onClick }: NavigationProps) => {
  const pathname = usePathname();

  return navigation?.length ? (
    <ul className={`${!stacked && "justify-end hidden md:flex md:gap-3"}`}>
      {navigation.map((item) => (
        <li
          key={item.link}
          className={`tracking-wider lowercase hover:underline hover:text-gray-900 whitespace-nowrap ${
            stacked && "pb-2"
          }`}
          onClick={onClick}
        >
          <Link
            className={`${
              pathname === item.link
                ? "bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-start-rgb))] rounded-2xl text-white py-1 px-2"
                : "text-[rgb(var(--foreground-rgb))] px-2"
            }`}
            href={item.link}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Navigation;
