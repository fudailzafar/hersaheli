import React from "react";
import { Block } from "./Block";
import {
  FiArrowUpRight,
  FiClipboard,
  FiCoffee,
  FiDollarSign,
  FiFeather,
  FiInbox,
  FiMove,
  FiRepeat,
  FiSmile,
} from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const HighlighBlocks = () => {
  return (
    <>
      <HighlightBlock
        Icon={FiDollarSign}
        iconClassName="text-green-500"
        title="Save on re-hiring"
        subtitle="Companies save 20% on re-hiring costs by using our platform."
      />
      <HighlightBlock
        Icon={FiArrowUpRight}
        iconClassName="text-pink-500"
        title="Grow your margins"
        subtitle="Gigs are 20% cheaper than full-time employees."
      />
      <HighlightBlock
        Icon={FiSmile}
        iconClassName="text-blue-500"
        title="Increase productivity"
        subtitle="Flexible work hours lead to 20% more productivity."
      />
      <HighlightBlock
        Icon={FiCoffee}
        iconClassName="text-orange-500"
        title="No more late nights"
        subtitle="Save 20% on late-night work hours."
      />
      <HighlightBlock
        Icon={FiFeather}
        iconClassName="text-zinc-500"
        title="Increase your diversity"
        subtitle="Our platform allows you to hire from a diverse pool of candidates."
      />
      <HighlightBlock
        Icon={FiInbox}
        iconClassName="text-purple-500"
        title="Attain an amazing public image"
        subtitle="Promote your company as a socially responsible organization."
      />
      <HighlightBlock
        Icon={FiMove}
        iconClassName="text-fuchsia-500"
        title="Flexible"
        subtitle="At the end of the day, you are the boss."
      />
      <HighlightBlock
        Icon={FiClipboard}
        iconClassName="text-red-500"
        title="No more paperwork"
        subtitle="We just saved you a lot on infrastructure and paperwork."
      />
      <HighlightBlock
        Icon={FiRepeat}
        iconClassName="text-yellow-500"
        title="Repeat what works"
        subtitle="Easily re-hire the best candidates."
      />
    </>
  );
};

const HighlightBlock = ({ iconClassName, Icon, title, subtitle }) => (
  <Block className="col-span-3 space-y-1.5 md:col-span-1">
    <Icon className={twMerge("text-3xl text-indigo-600", iconClassName)} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </Block>
);
