"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart";

const chartConfig = {
  views: {
    label: "orang",
  },
  hadir: {
    label: "Hadir",
    color: "hsl(var(--chart-1))",
  },
  tidakHadir: {
    label: "Tidak Hadir",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarGraph({ chartData }: { chartData: any[] }) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("hadir");

  const total = React.useMemo(
    () => ({
      hadir: chartData.reduce((acc, curr) => acc + curr.hadir, 0),
      tidakHadir: chartData.reduce((acc, curr) => acc + curr.tidakHadir, 0),
    }),
    [],
  );

  return (
    <Card>
      <CardHeader className="sm:flex-row flex flex-col items-stretch p-0 space-y-0 border-b">
        <div className="sm:py-6 flex flex-col justify-center flex-1 gap-1 px-6 py-5">
          <CardTitle>Grafik Kehadiran Maba</CardTitle>
          <CardDescription>Jumlah Kehadiran maba per hari</CardDescription>
        </div>
        <div className="flex">
          {["hadir", "tidakHadir"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="sm:text-3xl text-lg font-bold leading-none">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="sm:p-6 px-2">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("id-ID", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("id-ID", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
