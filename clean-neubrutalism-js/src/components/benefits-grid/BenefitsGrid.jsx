import React from "react";
import { motion } from "framer-motion";
import { HighlighBlocks } from "./HighlighBlocks";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";
import { Button } from "../shared/Button";

export const BenefitsGrid = () => {
  return (
    <motion.section
      transition={{
        staggerChildren: 0.1,
      }}
      initial="initial"
      whileInView="whileInView"
      className="relative mx-auto grid max-w-6xl grid-cols-3 gap-4 px-2 md:px-4"
    >
      <div className="col-span-3">
        <SectionHeading>Why this works for Startups?</SectionHeading>
        <SectionSubheading>
           Our idea is good, but here's what makes us stand out from the crowd.
        </SectionSubheading>
      </div>
      <HighlighBlocks />
      <div className="col-span-3 mt-6 flex justify-center">
        <Button intent="outline">
          <span className="font-bold">Get started - </span> post your first job!
        </Button>
      </div>
    </motion.section>
  );
};
