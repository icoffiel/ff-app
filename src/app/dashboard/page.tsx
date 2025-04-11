"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Here we would handle any logout logic like clearing tokens
    // For now, we just redirect to the home page
    console.log("Logging out...");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F2683] to-[#371c5b] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-[#6f43a3]">
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
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="text-white hover:bg-[#6f43a3] hover:text-[#FFC62F]"
        >
          Log Out
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <div className="bg-[#6f43a3]/20 backdrop-blur-sm border border-[#6f43a3]/30 rounded-lg p-8">
            <p className="text-xl mb-4">
              Welcome to your dashboard! This is where you&apos;ll manage your
              fantasy football team.
            </p>
            <p className="text-gray-300 mb-6">More features coming soon.</p>
            <div className="flex space-x-4">
              <Button className="bg-[#FFC62F] text-[#4F2683] hover:bg-[#e6b32a]">
                Placeholder Button
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-[#6f43a3] mt-auto text-center text-gray-400">
        <p>&copy; 2025 Fantasy League Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
