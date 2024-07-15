"use client";

import React, { useEffect, useState } from "react";
import SidebarLayout from "../layouts/SidebarLayout";
import MainLayout from "../layouts/MainLayout";

const url = "https://www.course-api.com/react-tabs-project";

export default function HomeTemplate() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <SidebarLayout jobs={jobs} />
      <MainLayout />
    </div>
  );
}
