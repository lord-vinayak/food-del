import { useId } from "react";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function RingInput({ placeholderText = "Enter your name" }) {
  const id = useId();
  return (
    <>
      <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
        <Input
          className="!px-3"
          style={{ color: "#F4631E" }}
          id={id}
          placeholder={placeholderText}
          type="email"
        />
      </div>
    </>
  );
}
