



import { Header, Listings, Socials } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-10 ">
        {/* Profile Section */}

        <Header />
        <Socials />
        {/* Work Accordion */}
        <Listings />
      </div>
    </div>
  );
}
