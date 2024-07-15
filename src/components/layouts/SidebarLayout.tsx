import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ScrollArea } from "../ui/scroll-area";

type Job = {
  id: number;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

export default function SidebarLayout({ jobs }: { jobs: Job[] }) {
  return (
    <div className="w-64 h-screen bg-background border-r">
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {jobs.map((job) => {
            return (
              <TabsTrigger key={job.id} value={`tab${job.id}`}>
                {job.company}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <ScrollArea className="h-[calc(100vh-40px)]">
          {jobs.map((job) => {
            return (
              <TabsContent key={job.id} value={`tab${job.id}`}>
                <h3 className="text-2xl font-bold">{job.company}</h3>
                <p className="text-xl">{job.title}</p>
                <p className="text-xl">{job.dates}</p>
              </TabsContent>
            );
          })}
        </ScrollArea>
      </Tabs>
    </div>
  );
}
