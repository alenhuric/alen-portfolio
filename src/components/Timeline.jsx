import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import timeline from "../data/timeline";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center py-20">
      <div className="w-full md:w-8/12">
        <Title>Experience</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.title}
            year={item.year}
            title={item.title}
            location={item.location}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
