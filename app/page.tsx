import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-10 ">
        {/* Profile Section */}
        <div className="flex flex-col gap-5">
          <div className="w-24 h-24 sm:w-24 sm:h-24 relative mx-auto sm:mx-0">
            <Image
              src="/simplyliam.png"
              alt="Profile Picture"
              quality={100}
              fill
              className="absolute object-cover rounded-full"
            />
          </div>
          <h1 className="font-semibold text-2xl">Hey, I&apos;m Liam</h1>
          <p className="max-w-full sm:max-w-[30em] font-medium text-start">
            I design and build interactive web applications and tools, blending clean visuals with thoughtful interactions, one project, one motion, one pixel at a time.
          </p>
        </div>

        {/* Work Accordion */}
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
      </div>
    </div>
  );
}
