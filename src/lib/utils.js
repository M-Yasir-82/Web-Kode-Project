
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines utility classes safely (no types required)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
