import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function MorphText() {
  const textRef = useRef(null);

  const words = [
    "Collaboration",
    "Innovation",
    "Community Insight",
    "Technology",
    "Science",
    "Service",
  ];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Start text with first word
    el.textContent = words[0];

    const loopTimeline = gsap.timeline({ repeat: -1 });

    words.forEach((_, i) => {
      const nextWord = words[(i + 1) % words.length]; // ensures last → first morph smoothly

      loopTimeline.to(el, {
        duration: 1.5,
        text: nextWord,
        ease: "power3.inOut",
      });

      // pause before next morph
      loopTimeline.to({}, { duration: 1.2 });
    });

    return () => loopTimeline.kill();
  }, []);

  return (
    <span
      ref={textRef}
      className="inline-block ml-2 font-semibold text-inherit"
      style={{ whiteSpace: "nowrap" }}
    />
  );
}

