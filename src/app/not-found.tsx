import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070709] px-4">
      <div className="text-center">
        <div className="mb-8 inline-block">
          <h1 className="font-display text-[8rem] uppercase leading-none tracking-tight text-white/10 md:text-[12rem]">
            404
          </h1>
        </div>
        
        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]">
          // PAGE NOT FOUND
        </p>
        
        <h2 className="mb-6 font-display text-2xl uppercase leading-tight tracking-tight text-white md:text-4xl">
          Like an encrypted packet, this page doesn't exist
        </h2>
        
        <p className="mb-8 max-w-xl text-zinc-400">
          The resource you're looking for has been moved, deleted, or never existed. 
          Let's get you back to secure territory.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="h-14 rounded-none border-2 border-[#ffd400] bg-[#ffd400] px-10 text-sm font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:bg-black hover:text-[#ffd400] focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:ring-offset-2 focus:ring-offset-black"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-none border-2 border-zinc-600 bg-transparent px-10 text-sm font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:border-[#ffd400] hover:text-[#ffd400] focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:ring-offset-2 focus:ring-offset-black"
          >
            <Link href="#projects">
              View Projects
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            Need help? Contact: parraprietodavid87@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
