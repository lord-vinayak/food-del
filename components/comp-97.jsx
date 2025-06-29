import { X } from "lucide-react";

import { Button } from "../components/ui/button";

export default function Component() {
  return (
    <Button
      className="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Add new item">
      <X size={16} aria-hidden="true" />
    </Button>
  );
}
