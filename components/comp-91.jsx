import { useState } from "react"
import { LoaderCircleIcon } from "lucide-react"

import { Button } from "../components/ui/button"

export default function Component({ButtonText = "Click Me"}) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Reset after 1 second
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      data-loading={isLoading || undefined}
      className="group relative disabled:opacity-100">
      <span className="group-data-loading:text-transparent">{ButtonText}</span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircleIcon className="animate-spin" size={16} aria-hidden="true" />
        </div>
      )}
    </Button>
  );
}
