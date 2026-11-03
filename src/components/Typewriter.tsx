"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 45 : 75;
    if (!deleting && length === word.length) delay = 1800;
    if (deleting && length === 0) delay = 350;

    const timer = window.setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setLength((l) => (deleting ? l - 1 : l + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [length, deleting, index, words]);

  const word = words[index % words.length];

  return (
    <span className={className}>
      {word.slice(0, length)}
      <span className="text-[#ffd400]">▌</span>
    </span>
  );
}
