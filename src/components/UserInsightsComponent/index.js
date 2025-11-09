import React from "react";
import classes from "./UserInsightsComponent.module.css";

export default function UserInsightsComponent({ data }) {
  return (
    <div className={classes.mainWrapper}>
      <p>
        Profile Visitors <span>{data?.visitors}</span>
      </p>
      <p>
        Resume Viewers <span>{data?.resumeViewers}</span>
      </p>
      <p>
        My Jobs <span>{data?.myJobs}</span>
      </p>
    </div>
  );
}
