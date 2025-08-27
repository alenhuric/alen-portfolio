import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Title from "./Title";

function GithubCalendar() {
  const [calendarProps, setCalendarProps] = useState({
    blockSize: 12,
    blockMargin: 6,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        // small screens
        setCalendarProps({ blockSize: 6, blockMargin: 2 });
      } else if (window.innerWidth < 920) {
        // medium screens
        setCalendarProps({ blockSize: 9, blockMargin: 2 });
      } else if (window.innerWidth < 1024) {
        // large screens
        setCalendarProps({ blockSize: 11, blockMargin: 3 });
      } else {
        // x-large screens
        setCalendarProps({ blockSize: 11, blockMargin: 6 });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-violet-200 dark:bg-violet-700 py-20 flex flex-col items-center rounded-xl">
      <Title>Days I Code</Title>

      <div className="mt-8">
        <GitHubCalendar
          username="alenhuric"
          blockSize={calendarProps.blockSize}
          blockMargin={calendarProps.blockMargin}
          blockRadius={5}
          fontSize={14}
        />
      </div>
    </section>
  );
}

export default GithubCalendar;
