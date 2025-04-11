import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F2683] to-[#371c5b]">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#4F2683]"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 16V2" />
              <path d="M19.071 4.929 4.929 19.071" />
              <path d="M16 12H2" />
              <path d="M22 12h-4" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">
            Fantasy League Pro
          </span>
        </div>
        <div className="flex items-center">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-[#4F2683]"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Dominate Your{" "}
            <span className="text-[#FFC62F]">Fantasy Football</span> League
          </h1>
          <p className="text-xl text-gray-200">
            Make smarter decisions, track your team&apos;s performance, and
            crush the competition with our powerful fantasy football tools.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-[#FFC62F] to-[#e6b32a] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-48 h-48 text-white opacity-80"
              >
                <path
                  fill="currentColor"
                  d="M575.2 325.7c.2-1.9 .7-3.7 .7-5.6 0-35.1-28.6-63.5-63.8-63.5-11.5 0-22.5 3.1-32.1 8.8-8.7-15.9-20.6-28.5-34.3-39.4-14.1-10.7-30-18-48.2-21.5V272c0 22.1-17.9 40-40 40s-40-17.9-40-40V160c0-16.4 4.9-31.7 13.3-44.7 8.3-11.6 20.4-21.3 35.7-27.8 15.2-6.4 33.1-9.4 52.5-9 21.3 0 40.6 3.6 56.5 10.2 16.3 7 29.7 16.8 38.6 28.1 8.7 11.2 13.3 23.5 13.3 36.2 0 10.4-8.4 18.7-18.7 18.7h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h.6c-1.3-7.3-5.5-14.3-12.7-21.7-7.5-7.7-17.2-13.8-29.3-17.6-11.9-3.7-25.6-5.9-40.6-5.9-14.3-.2-26.7 2.4-36.5 6.7-9.5 4.3-16.5 10.1-21.1 16.4-0.2 0.2-.3 0.5-.5 0.7-5.3 7.6-9.7 16.7-12.8 26.6-2.8 8.5-4.2 17.1-4.2 25.8v2.7c0 0 0 96-3 96 0 35.1-28.6 63.5-63.8 63.5-14.6 0-28.5-5-39.5-13.8C33.5 343 16 373.5 16 409c0 14.3 2.8 27.9 7.9 40.3 5.1 12.3 12.1 22.8 21 31.5 17.8 17.3 41.8 28.1 68.1 28.1 27.4 0 58.5-7.9 91.2-23.7 15.1-7.2 25.5-13.7 39.6-13.7h272c35.3 0 64-28.7 64-64v-64h28.8c45.2 0 83.1-34.1 87.6-78.8 0.9-9-0.2-17.2-3.1-25.8-2.6-7.6-6.6-13.5-12.7-17.8-5.7-4-12.8-6.4-20.4-6.4-13.2 0-24.4 7.3-30.5 18.1-6.2 10.9-6.6 24.3-1.1 35.2l12.2 24.4c0 35.3-28.7 64-64 64h-32v-48.6c0-2.4 .2-4.8 .5-7.1zM220.3 129.7c13.1-5.9 27.9-9.3 43.4-9.3s30.3 3.4 43.4 9.3c5.9 2.8 11.2 6.1 15.9 9.9 23.9 19.9 36.6 51.5 36.6 84.5v64c0 26.5-21.5 48-48 48s-48-21.5-48-48v-64c0-33-12.6-64.6-36.7-84.5-4.6-3.8-9.9-7.1-15.8-9.9z"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-[#6f43a3] mt-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" className="hover:text-[#FFC62F]">
            About
          </Link>
          <Link href="#" className="hover:text-[#FFC62F]">
            Contact
          </Link>
        </div>
        <p>&copy; 2025 Fantasy League Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
