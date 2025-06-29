import { useId } from "react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

import "../components/comp-22.css"

export default function Component({placeholderText = "No Text", buttonText = "No Text"}) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label className="hidden" htmlFor={id}>Input with button</Label>
      <div className="flex gap-2">
        <Input id={id} className="!shadow-[0_4px_10px_0_rgba(244,99,30,0.3)] uppercase !p-5 flex-1 promo-input" placeholder={placeholderText} type="email" />
        <Button className="!tracking-wider !p-5" variant="outline">{buttonText}</Button>
      </div>
    </div>
  );
}
