import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with gray background</Label>
      <Input
        id={id}
        className="bg-muted border-transparent shadow-none"
        placeholder="Email"
        type="email" />
    </div>
  );
}
