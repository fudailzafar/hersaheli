import React from "react";
import { cva } from "class-variance-authority";

const button = cva(["uppercase", "transition-colors"], {
  variants: {
    intent: {
      primary: ["bg-pink-500", "hover:bg-pink-700", "text-white"],
      secondary: ["bg-pink-500", "hover:bg-pink-700", "text-white"],
      outline: ["bg-pink-200", "hover:bg-pink-500", "border", "border-pink-900"],
    },
    size: {
      small: ["px-3", "py-1.5", "rounded-md", "text-sm"],
      medium: ["p-3", "rounded-lg", "text-base"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export const Button = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);
