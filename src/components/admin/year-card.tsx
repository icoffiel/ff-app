"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SyncButton } from "@/components/admin/sync-button";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface WeekStatus {
  [week: string]: string;
}

interface YearCardProps {
  year: string;
  weeks: WeekStatus;
}

const WEEKS_PER_PAGE = 6;

export function YearCard({ year, weeks }: YearCardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Object.keys(weeks).length / WEEKS_PER_PAGE);

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

  const getCurrentWeeks = () => {
    const startIndex = (currentPage - 1) * WEEKS_PER_PAGE;
    const endIndex = startIndex + WEEKS_PER_PAGE;
    return Object.entries(weeks).slice(startIndex, endIndex);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{year}</CardTitle>
        <SyncButton year={year} onSync={handleSync} />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {getCurrentWeeks().map(([week, status]) => (
            <div
              key={week}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <span className="font-medium">{week}</span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${getStatusColor(status)}`}
                />
                <span className="text-sm capitalize">{status}</span>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="flex items-center px-4">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
