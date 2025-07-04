import { useId, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { color } from "framer-motion";

export default function Component() {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="*:not-first:mt-2">
      {/* <Label htmlFor={id}>Show/hide password input</Label> */}
      <div className="relative">
        <Input
          id={id}
          className="pe-9 !px-3"
          style={{ color: "#F4631E" }}
          placeholder="Password"
          type={isVisible ? "text" : "password"}
        />
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-10 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 !px-3"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password">
          {isVisible ? (
            <EyeOffIcon size={16} aria-hidden="true" />
          ) : (
            <EyeIcon size={16} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
