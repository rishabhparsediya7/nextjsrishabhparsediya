"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type Card = {
  id: number;
  src: string;
  content?: string;
  className?: string;
};

type CardPosition = {
  x: number;
  scale: number;
  zIndex: number;
};

export default function StackedCards({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState<number | null>(1);

  const handleClick = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };
  const getCardPositions = useMemo(() => {
    const positions: Record<number, CardPosition> = {};
    let activeIndex = cards.findIndex(card => card.id === active);
    
    cards.forEach((_, index) => {
      let x = (index+1) * 50;
      let scale = 1 - (index+1) * 0.05;
      let zIndex = cards.length - (index+1);
      
      if (activeIndex !== -1) {
        if (index === activeIndex) {
          x = 0;
          scale = 1.1;
          zIndex = 999;
        } else if (index < activeIndex) {
          x = (index+1) * 50;
        } else {
          x = (index+1 - 1) * 50;
        }
      }
      positions[index] = { x, scale, zIndex };
    });
    
    return positions;
  }, [cards, active]);

  return (
    <div className="relative flex justify-center items-center w-full">
      {cards.map((card, index) => {
        const { x, scale, zIndex } = getCardPositions[index] || {};
        
        return (
          <motion.div
            key={card.id}
            className="absolute left-0 w-[280px] h-[560px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => handleClick(card.id)}
            initial={{
              x: 0,
              scale: 1,
              zIndex: 1,
            }}
            animate={{
              x: x,
              scale: scale,
              zIndex: zIndex,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={card.src}
              alt={card.content || `Card ${card.id}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
