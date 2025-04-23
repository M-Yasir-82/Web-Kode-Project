
import React from "react";
import { cn } from "@/lib/utils";

/**
 * StatCard Component
 * Modern dark glass/gradient design with accent shadows and bold visuals
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The stat title
 * @param {string|number} props.value - The stat value
 * @param {string} [props.description] - The stat description
 * @param {React.ReactNode} [props.icon] - The stat icon
 * @param {string} [props.className] - Additional class names
 * @param {'up'|'down'|'neutral'} [props.trend] - The stat trend
 * @param {string} [props.trendValue] - The stat trend value
 */
const StatCard = ({
  title,
  value,
  description,
  icon,
  className,
  trend,
  trendValue,
}) => (
  <div
    className={cn(
      "relative rounded-2xl p-6 overflow-hidden shadow-xl bg-gradient-to-br from-[#23245b] via-[#292b4a] to-[#180f31] border border-purple-900/30",
      "backdrop-blur-xl transition-transform hover:scale-[1.02]",
      "before:absolute before:-inset-1 before:bg-gradient-to-br before:from-purple-600/20 before:to-indigo-500/10 before:rounded-2xl before:z-0",
      className
    )}
    style={{ zIndex: 1 }}
  >
    <div className="relative z-10 flex flex-row items-center justify-between pb-2">
      <span className="flex items-center gap-2">
        {icon && (
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-700 via-indigo-600 to-blue-500 shadow-lg text-white">
            {icon}
          </span>
        )}
        <span className="text-xs font-bold uppercase tracking-wider text-white/80 drop-shadow">
          {title}
        </span>
      </span>
      {/* Trend tag can optionally be floated here on mobile */}
    </div>
    <div className="relative z-10 mt-3 mb-0">
      <span className="text-3xl md:text-4xl font-bold drop-shadow-lg text-white/90">
        {value}
      </span>
      {description && (
        <div className="text-sm font-medium text-indigo-200/80 mt-1">
          {description}
        </div>
      )}
      {trend && trendValue && (
        <div
          className={cn(
            "flex items-center mt-5 text-xs font-semibold rounded-full px-3 py-1 w-max",
            trend === "up"
              ? "bg-green-500/20 text-green-300"
              : trend === "down"
              ? "bg-red-500/20 text-red-300"
              : "bg-white/10 text-white/80"
          )}
        >
          {trend === "up" && (
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          )}
          {trend === "down" && (
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          )}
          {trend === "neutral" && (
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
            </svg>
          )}
          {trendValue}
        </div>
      )}
    </div>
    {/* Glow effect for 3D accent */}
    <div className="absolute -bottom-5 -right-5 w-32 h-20 rounded-full bg-gradient-to-tr from-indigo-600/40 to-purple-700/30 blur-2xl opacity-70 pointer-events-none z-0" />
    <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-400/10 blur-2xl opacity-60 pointer-events-none z-0" />
  </div>
);

export default StatCard;
