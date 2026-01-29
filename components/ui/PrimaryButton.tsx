import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface PrimaryButtonProps extends React.ComponentProps<typeof Button> {}

export function PrimaryButton({ className, children, ...props }: PrimaryButtonProps) {
  return (
    <Button
      className={cn(
        "relative border-primary group bg-primary text-primary-foreground hover:bg-primary/95 shadow-[inset_4px_4px_22.8px_5px_rgba(253,242,214,0.28)] transition-all duration-300 active:scale-95 rounded-full overflow-hidden border-none",
        className
      )}
      {...props}
    >
      {/* Background Blobs */}
      <div className="absolute -left-8 -top-10 w-24 h-12 bg-secondary rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute -right-8 -bottom-10 w-24 h-12 bg-secondary rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Button>
  )
}
