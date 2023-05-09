import Link from "next/link";

type NavigationProps = {
  navigation: NavigationLink[];
  stacked?: boolean;
  onClick?: () => void;
};

export type NavigationLink = { link: string; text: string };

const Navigation = ({ navigation, stacked, onClick }: NavigationProps) => {
  return navigation?.length ? (
    <ul className={`${!stacked && "justify-end hidden md:flex md:gap-3"}`}>
      {navigation.map((item) => (
        <li
          key={item.link}
          className={
            "text-[rgb(var(--foreground-rgb))] tracking-wider lowercase hover:underline hover:text-gray-900"
          }
          onClick={onClick}
        >
          <Link href={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Navigation;
