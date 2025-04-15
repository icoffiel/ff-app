"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SyncButton } from "@/components/admin/sync-button";

interface WeekStatus {
  [week: string]: string;
}

interface YearDetailsProps {
  year: string;
  weeks: WeekStatus;
}

// Helper function to get week dates (mock implementation)
const getWeekDates = (year: string, weekNumber: number) => {
  const startDate = new Date(parseInt(year), 0, 1);
  const dayOffset = startDate.getDay();
  const weekStart = new Date(startDate);
  weekStart.setDate(weekStart.getDate() + (weekNumber - 1) * 7 - dayOffset);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  return {
    start: weekStart.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    end: weekEnd.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
  };
};

export function YearDetails({ year, weeks }: YearDetailsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-green-500";
      case "in progress":
        return "bg-yellow-500";
      case "missing":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleSync = async (year: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`Syncing data for year ${year}`);
    // TODO: Implement actual sync logic here
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-end mb-6">
          <SyncButton year={year} onSync={handleSync} />
        </div>
        <div className="space-y-4">
          {Object.entries(weeks).map(([week, status]) => {
            const weekNumber = parseInt(week.split(" ")[1]);
            const dates = getWeekDates(year, weekNumber);

            return (
              <div
                key={week}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                    <span className="font-semibold text-gray-500 group-hover:text-gray-900 transition-colors">
                      W{weekNumber}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                      {week}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-800 transition-colors">
                      {dates.start} - {dates.end}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${getStatusColor(
                        status
                      )}`}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-gray-800 transition-colors">
                      {status}
                    </span>
                  </div>
                  <button
                    className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
                    onClick={() => console.log(`Sync week ${weekNumber}`)}
                  >
                    Sync Week
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
