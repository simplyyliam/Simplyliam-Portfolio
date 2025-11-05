import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex gap-3">
      <Link href="https://github.com/simplyyliam" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="rounded-full cursor-pointer hover:bg-accent transition-all ease-linear">
          GitHub
        </Button>
      </Link>
    </div>
  );
}
