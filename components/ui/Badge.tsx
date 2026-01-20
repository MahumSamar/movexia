import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  children: React.ReactNode
}

export function Badge({ icon: Icon, children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-foreground text-xs font-bold uppercase tracking-wider",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="text-primary w-3.5 h-3.5" />}
      {children}
    </div>
  )
}
