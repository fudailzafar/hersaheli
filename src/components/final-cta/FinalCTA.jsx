import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { LogoLarge } from "../navigation/Logo";
import { Button } from "../shared/Button";
import Link from "next/link";

export const FinalCTA = () => {
  return (
    <section className="-mt-8 bg-white px-2 py-24 md:px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <LogoLarge />
        <SectionHeading>Ready to Start?</SectionHeading>
        <p className="mx-auto mb-8 text-center text-base leading-relaxed md:text-xl md:leading-relaxed">
          Benefit from our platform to connect with the untapped talent pool of
          India, boosting your diversity!
        </p>
        <Button intent="primary">
          <Link href={"https://sabeer-bhai-code.vercel.app/"}>
            <span className="font-bold">Get started - </span> Get your
            opportunity now!
          </Link>
        </Button>
      </div>
    </section>
  );
};
