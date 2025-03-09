import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  // Initialize state based on current theme
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  // Toggle theme when the state changes
  React.useEffect(() => {
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [isDark])

  return (
    <Toggle
      pressed={isDark}
      onPressedChange={setIsDark}
      aria-label="Toggle dark mode"
      variant="outline"
      size="sm"
      className="rounded-full w-9 p-0"
    >
      {isDark ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Toggle>
  )
}
