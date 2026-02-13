import { clsx } from "clsx";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={clsx(
      "mb-12",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      {subtitle && (
        <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-primary font-bold text-sm tracking-wide uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      <div className={clsx(
        "h-1.5 w-24 bg-accent rounded-full mt-4",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </div>
  );
}
