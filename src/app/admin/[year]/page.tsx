import { YearDetails } from "@/components/admin/year-details";
import { notFound } from "next/navigation";

// Mock data for demonstration
const mockGameSyncData = {
  "2024": {
    "Week 1": "complete",
    "Week 2": "in progress",
    "Week 3": "missing",
    "Week 4": "complete",
    "Week 5": "missing",
    "Week 6": "complete",
    "Week 7": "complete",
    "Week 8": "complete",
    "Week 9": "complete",
    "Week 10": "complete",
    "Week 11": "complete",
    "Week 12": "complete",
    "Week 13": "complete",
    "Week 14": "complete",
    "Week 15": "complete",
    "Week 16": "complete",
    "Week 17": "complete",
    "Week 18": "complete",
  },
  "2023": {
    "Week 1": "complete",
    "Week 2": "complete",
    "Week 3": "complete",
    "Week 4": "complete",
    "Week 5": "complete",
    "Week 6": "complete",
    "Week 7": "complete",
    "Week 8": "complete",
    "Week 9": "complete",
    "Week 10": "complete",
    "Week 11": "complete",
    "Week 12": "complete",
    "Week 13": "complete",
    "Week 14": "complete",
    "Week 15": "complete",
    "Week 16": "complete",
    "Week 17": "complete",
    "Week 18": "complete",
  },
};

interface PageProps {
  params: {
    year: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { year } = await params;
  const yearData = mockGameSyncData[year as keyof typeof mockGameSyncData];

  if (!yearData) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <a
          href="/admin"
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Admin
        </a>
        <h1 className="text-3xl font-bold">Game Sync Status - {year}</h1>
      </div>
      <YearDetails year={year} weeks={yearData} />
    </div>
  );
}
