import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";
import { DesktopLinks } from "./DesktopLinks";
import { MobileLinks } from "./MobileLinks";
import { Button } from "../shared/Button";
import Link from "next/link";

export const ExpandableNavBar = ({ children, links }) => {
  const [hovered, setHovered] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeSublinks = useMemo(() => {
    if (!hovered) return [];
    const link = links.find((l) => l.title === hovered);

    return link ? link.sublinks : [];
  }, [hovered]);

  return (
    <>
      <div className="bg-pink-600 pt-2">
        <nav
          onMouseLeave={() => setHovered(null)}
          className="rounded-t-2xl bg-white p-4"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <Logo />
              <DesktopLinks
                links={links}
                setHovered={setHovered}
                hovered={hovered}
                activeSublinks={activeSublinks}
              />
            </div>
            <Button className="hidden md:block" intent="secondary" size="small">
              <Link href={"https://sabeer-bhai-code.vercel.app/"}>
                <span className="font-bold"> Join Today! </span>
              </Link>
            </Button>
            <button
              onClick={() => setMobileNavOpen((pv) => !pv)}
              className="mt-0.5 block text-2xl md:hidden"
            >
              <FiMenu />
            </button>
          </div>
          <MobileLinks links={links} open={mobileNavOpen} />
        </nav>
      </div>
      <motion.main layout>
        <div className="bg-white">{children}</div>
      </motion.main>
    </>
  );
};
