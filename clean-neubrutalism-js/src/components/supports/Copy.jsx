import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({ selected, setSelected }) => {
  return (
    <div className="w-full">
      <span className="mb-1.5 block text-center text-pink-600 md:text-start">
        For the companies who go the extra mile!
      </span>
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight md:text-start md:text-5xl md:leading-tight">
        Don't take us at our word, take theirs
      </h2>
      <p className="mb-6 text-center text-base leading-relaxed md:text-start md:text-lg md:leading-relaxed">
        We built this platform for Indian homemakers — educated, skilled, but
        excluded from the workforce due to family duties, social norms, or lack
        of flexible jobs. These women often want to contribute financially but
        can’t commit to rigid 9-to-5 schedules or travel for work.
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => {
          return (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          );
        })}
      </div>
    </div>
  );
};
