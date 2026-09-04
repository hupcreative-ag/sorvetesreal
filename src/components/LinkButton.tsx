import * as React from "react";
import { cn } from "@/lib/utils";

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "gold" | "white";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function LinkButton({
  variant = "gold",
  icon,
  children,
  className,
  ...props
}: LinkButtonProps) {
  const isGold = variant === "gold";

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex items-center justify-between w-full max-w-md py-4 px-6 rounded-2xl font-semibold text-lg md:text-xl transition-all duration-300 ease-out shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-real-gold/50 cursor-pointer overflow-hidden",
        isGold
          ? "bg-real-gold text-real-wine border-2 border-real-gold/90 hover:bg-[#f5cb40] hover:border-real-gold hover:text-real-wine"
          : "bg-real-white text-real-red border-2 border-real-white/90 hover:bg-slate-50 hover:text-[#a52628]",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3.5 z-10">
        {icon ? (
          <span
            className={cn(
              "transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6",
              isGold ? "text-real-wine" : "text-real-red"
            )}
          >
            {icon}
          </span>
        ) : null}
        <span className="tracking-wide text-xl md:text-2xl font-bold uppercase pt-0.5 leading-none">
          {children}
        </span>
      </div>

      <svg
        className={cn(
          "w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1 opacity-75 group-hover:opacity-100 z-10",
          isGold ? "text-real-wine" : "text-real-red"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>

      {/* Subtle shine / depth layer */}
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </a>
  );
}

export default LinkButton;
