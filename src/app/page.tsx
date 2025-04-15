import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signInWithGoogle } from "@/actions/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is already logged in, redirect to dashboard
  if (user) {
    redirect("/dashboard");
  }

  const error = searchParams.error;

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
      </header>

      {/* Error Message */}
      {error === "unauthorized" && (
        <div className="container mx-auto px-4 py-4">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Access Denied</strong>
            <span className="block sm:inline">
              {" "}
              Your email is not authorized to access this application.
            </span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Dominate Your{" "}
            <span className="text-[#FFC62F]">Fantasy Football</span> League
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Make smarter decisions, track your team&apos;s performance, and
            crush the competition with our powerful fantasy football tools.
          </p>
          <form action={signInWithGoogle}>
            <Button
              type="submit"
              className="bg-white text-[#4F2683] hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Sign in with Google
            </Button>
          </form>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">
              Real-time Stats
            </h3>
            <p className="text-gray-200">
              Get instant updates on player performance and league standings.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">
              Smart Insights
            </h3>
            <p className="text-gray-200">
              Make data-driven decisions with our advanced analytics.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">
              League Management
            </h3>
            <p className="text-gray-200">
              Easily manage your league settings and track team progress.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-[#6f43a3] mt-auto">
        <div className="flex justify-center space-x-6 mb-4"></div>
        <p>&copy; 2025 Fantasy League Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
