import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Title from "./Title";

function GithubCalendar() {
  const [calendarProps, setCalendarProps] = useState({
    blockSize: 12,
    blockMargin: 6,
    fontSize: 14,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 470) {
        // xsmall screens
        setCalendarProps({ blockSize: 5, blockMargin: 2, fontSize: 10 });
      } else if (window.innerWidth < 640) {
        // small screens
        setCalendarProps({ blockSize: 6, blockMargin: 2, fontSize: 12 });
      } else if (window.innerWidth < 920) {
        // medium screens
        setCalendarProps({ blockSize: 9, blockMargin: 2, fontSize: 15 });
      } else if (window.innerWidth < 1024) {
        // large screens
        setCalendarProps({ blockSize: 11, blockMargin: 3, fontSize: 16 });
      } else {
        // x-large screens
        setCalendarProps({ blockSize: 11, blockMargin: 6, fontSize: 17 });
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
          fontSize={calendarProps.fontSize}
        />
      </div>
    </section>
  );
}

export default GithubCalendar;
