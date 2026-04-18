import * as React from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder?: string;
  options: readonly string[];
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "flex h-12 w-full appearance-none rounded-2xl border border-brand-line bg-white px-4 pr-12 text-sm text-slate-700 outline-none transition focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/10",
            className,
          )}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    );
  },
);
Select.displayName = "Select";

export { Select };
