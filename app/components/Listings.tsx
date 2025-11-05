import { Button } from "@/components/ui/button";
import {ArrowRight02Icon } from "@hugeicons/core-free-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";



export default function Listing() {
  return (
    <div className="flex flex-col w-full gap-2.5">
      <Accordion collapsible type="single" defaultValue="work">
        <AccordionItem value="work">
          <AccordionTrigger className="text-lg cursor-pointer">
            Work
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2.5">
            <Link
              href="https://quote-calculator-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="w-full justify-between cursor-pointer"
              >
                <h1>Quote Calculator</h1>
                <div className="flex items-center justify-center w-5 h-5 bg-accent p-2.5">
                  <HugeiconsIcon icon={ArrowRight02Icon} />
                </div>
              </Button>
            </Link>

            <Link
              href="https://google-keep-react-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="w-full justify-between cursor-pointer"
              >
                <h1>Google Keep Clone</h1>
                <div className="flex items-center justify-center w-5 h-5 bg-accent p-2.5">
                  <HugeiconsIcon icon={ArrowRight02Icon} />
                </div>
              </Button>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
