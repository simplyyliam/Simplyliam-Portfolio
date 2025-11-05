import Image from "next/image";

export default function Header() {
  return (
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
        I design and build interactive web applications and tools, blending
        clean visuals with thoughtful interactions, one project, one motion, one
        pixel at a time.
      </p>
    </div>
  );
}
