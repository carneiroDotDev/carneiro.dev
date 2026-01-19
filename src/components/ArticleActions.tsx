"use client";

import { incrementLike } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ArticleActions({ initialLikes, slug, category }: { initialLikes: number; slug: string; category: string }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [pendingLikes, setPendingLikes] = useState(0);
  const [showPlusOne, setShowPlusOne] = useState(false);
  
  // Ref to track the timeout so we can clear it
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleLike = () => {
    // Determine the new like count and set local state immediately (optimistic)
    setLikes((prev) => prev + 1);
    setLiked(true);
    setPendingLikes((prev) => prev + 1);
    
    // Trigger animation re-render
    setShowPlusOne(false);
    setTimeout(() => setShowPlusOne(true), 0);


  };
  
  // Effect to handle the actual sending
  useEffect(() => {
    if (pendingLikes === 0) return;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      incrementLike(slug, category, pendingLikes);
      setPendingLikes(0);
    }, 5000);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [pendingLikes, slug, category]);
  // Try to unmount and ensure pending likes are sent
  // If user leaves page before the 5s debouce, pending likes might be lost. 

  return (
    <div className="w-full border-t border-b border-neutral-200 dark:border-neutral-800 py-3 my-8 flex justify-end items-center gap-4 select-none">
      <div className="relative flex items-center text-neutral-600 dark:text-neutral-400">
        <button
          onClick={handleLike}
          className={cn(
            "group relative p-2 rounded-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-hidden",
            // Removed disabled and cursor-default logic
          )}
          aria-label="Like"
        >
          <AnimatePresence>
            {showPlusOne && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: -20, scale: 1 }}
                exit={{ opacity: 0, y: -30 }}
                style={{ color: "#D73A49" }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold pointer-events-none whitespace-nowrap"
                onAnimationComplete={() => setShowPlusOne(false)}
              >
                +1 Thanks!!! 
              </motion.div>
            )}
          </AnimatePresence>
          
          <LikeIcon filled={liked} />
        </button>
        <span className="text-sm font-medium min-w-[20px]">
          {likes}
        </span>
      </div>
    </div>
  );
}

function LikeIcon({ filled }: { filled: boolean }) {
  // The parent component re-renders on every click (state change).
  return (
    <motion.div
        key={filled ? "filled" : "outline"} // Key change triggers animation? No, `liked` stays true after first click.
        whileTap={{ scale: 0.8 }}
        animate={filled ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.2 }}
    >
        <Heart
        className={cn(
            "w-6 h-6 transition-all duration-300",
            filled ? "fill-[#D73A49] text-[#D73A49]" : "text-neutral-500 group-hover:text-black dark:group-hover:text-white"
        )}
        />
    </motion.div>
  );
}
