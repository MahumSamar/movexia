import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export interface SecondaryButtonProps extends React.ComponentProps<typeof Button> {}

export function SecondaryButton({ className, ...props }: SecondaryButtonProps) {
  return (
    <Button
      className={cn(
        "bg-secondary border border-secondary-foreground text-secondary-foreground hover:bg-secondary/80 shadow-sm transition-all duration-200 active:scale-95 rounded-full",
        className
      )}
      {...props}
    />
  )
}
