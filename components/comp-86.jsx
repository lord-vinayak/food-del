import { ArrowRightIcon } from "lucide-react";

import { Button } from "../components/ui/button";

export default function Component({ ButtonText = "No Text" }) {
  return (
    <Button
      style={{ color: "#F4631E", backgroundColor: "#ffffff" }}
      className="group !px-3 !shadow-[0_4px_10px_0_rgba(244,99,30,0.3)]">
      {ButtonText}
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
  );
}
