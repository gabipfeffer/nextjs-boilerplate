import Link from "next/link";

type NavigationProps = {
  navigation: NavigationLink[];
  mobile: boolean;
  onClick?: () => void;
};

export type NavigationLink = { link: string; text: string };

const Navigation = ({ navigation, mobile, onClick }: NavigationProps) => {
  return navigation?.length ? (
    <ul className={`${!mobile && "flex-1 justify-end hidden md:flex"}`}>
      {navigation.map((item) => (
        <li
          key={item.link}
          className={
            "text-gray-600 md:px-5 py-2.5 hover:underline hover:text-gray-900 tracking-wider lowercase"
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
