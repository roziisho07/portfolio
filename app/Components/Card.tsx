"use client";
import React from "react";
import {
  TextRevealCard,
 
  TextRevealCardTitle,
} from "./TextReveal";

export function TextRevealCardPreview() {
  return (
    <div className="pt-20 w-auto  hidden lg:block  ">
      <TextRevealCard text="Your vision" revealText="My execution ">
        <TextRevealCardTitle>
          The magic happens on engagement.
        </TextRevealCardTitle>
        {/* <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}
