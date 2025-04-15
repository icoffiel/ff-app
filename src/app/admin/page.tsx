import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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

const getStatusCount = (weeks: Record<string, string>, status: string) => {
  return Object.values(weeks).filter((s) => s === status).length;
};

export default function AdminPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Game Sync Status</h1>
      </div>
      <div className="grid gap-6">
        {Object.entries(mockGameSyncData).map(([year, weeks]) => {
          const complete = getStatusCount(weeks, "complete");
          const inProgress = getStatusCount(weeks, "in progress");
          const missing = getStatusCount(weeks, "missing");
          const total = Object.keys(weeks).length;

          return (
            <Link key={year} href={`/admin/${year}`}>
              <Card className="group hover:bg-gray-100 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-gray-500 group-hover:text-gray-900 transition-colors">
                    {year}
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-400 group-hover:text-gray-800 transition-colors">
                        {complete}/{total} Complete
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="text-sm text-gray-400 group-hover:text-gray-800 transition-colors">
                        {inProgress}/{total} In Progress
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-sm text-gray-400 group-hover:text-gray-800 transition-colors">
                        {missing}/{total} Missing
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${(complete / total) * 100}%` }}
                    />
                    <div
                      className="bg-yellow-500 h-2.5 rounded-full -mt-2.5"
                      style={{ width: `${(inProgress / total) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
