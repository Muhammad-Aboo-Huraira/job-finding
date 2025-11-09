import React from "react";
import classes from "./UserProfileComponent.module.css";

export default function UserProfileComponent({ data }) {
  return (
    <div className={classes.userProfileWrapper}>
      <img src={data?.cover} className={classes.coverImg} />
      <div className={classes.userDetailsWrapper}>
        <img src={data?.profile} className={classes.profileImg} />
        <div className={classes.userAbout}>
          <h4>{data?.name}</h4>
          <p>{data?.roles}</p>
          <span>{data?.location}</span>
        </div>
      </div>
    </div>
  );
}
