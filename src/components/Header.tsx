"use client";
import Image from "next/image";
import Navigation, { NavigationLink } from "src/components/Navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import useScrollPosition from "src/hooks/useScrollPosition";
import Modal from "src/components/Modal";

type HeaderProps = {
  logo?: { src: string; alt: string };
  navigation?: NavigationLink[];
};

export default function Header({ logo, navigation }: HeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const scrollHeight = useScrollPosition();

  return (
    <>
      <header
        className={`py-5 px-5 md:px-10 md:py-0 min-w-full fixed drop-shadow-sm transition-height duration-500 ease-in-out z-10 ${
          scrollHeight < 60 ? "h-20" : "h-14"
        }`}
      >
        <nav className="flex flex-row items-center justify-between min-h-full">
          {logo && (
            <a href={"/"}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          )}
          {navigation?.length && (
            <>
              <Navigation navigation={navigation} />
              {isMobileNavOpen ? (
                <XMarkIcon
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  className="block md:hidden text-black w-10 h-10"
                />
              ) : (
                <Bars3Icon
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  className="block md:hidden text-black w-10 h-10"
                />
              )}
            </>
          )}
        </nav>
      </header>
      {navigation?.length && (
        <Modal
          onClose={() => setIsMobileNavOpen(false)}
          isOpen={isMobileNavOpen}
          backgroundClassName={
            "fixed z-10 left-0 top-0 w-full h-full overflow-auto top-20"
          }
          bodyClassName={
            "fixed md:hidden right-0 top-20 h-full w-2/4 text-end p-5 bg-[rgb(var(--background-start-rgb))]"
          }
        >
          <Navigation
            navigation={navigation}
            stacked={true}
            onClick={() => setIsMobileNavOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}
