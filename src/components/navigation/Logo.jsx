import { h1 } from "framer-motion/client";

export const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <h1 className="text-3xl font-semibold text-pink-700">HerSaheli</h1>
  );
};

export const LogoSmall = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="32"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-fit fill-zinc-950"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#09090B"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#09090B"
      ></path>
    </svg>
  );
};

export const LogoLarge = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <h1 className="text-4xl font-semibold text-pink-600">HerSaheli</h1>
  );
};
