import { useEffect, useState } from "react";

export const useVirtualizedGrid = (rowHeight = 300) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = window.innerHeight;
      const newStart = Math.max(0, Math.floor(scrollTop / rowHeight) - 2);
      const newEnd = newStart + Math.ceil(height / rowHeight) + 4;
      setStart(newStart);
      setEnd(newEnd);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [rowHeight]);

  return { start, end };
};
