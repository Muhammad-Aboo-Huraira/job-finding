import React from "react";
import classes from "./JobCard.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegBookmark, FaRegClock } from "react-icons/fa6";
import { Button } from "../Button";
export default function JobCard({ data, type }) {
  return (
    <div className={classes.mainWrapper}>
      {type === "featured" && <p>Promoted</p>}
      <div className={classes.imageNameWrapper}>
        <div className={classes.iconWrapper}>
          <img src={data?.photo} />
        </div>
        <div className={classes.rolePlatform}>
          <h4>{data?.title}</h4>
          <p>{data?.platform}</p>
        </div>
      </div>
      <h4>
        <MdOutlineLocationOn size={12} />
        {data?.location}
      </h4>
      <h4>
        <FaRegClock size={12} />
        {data?.createdAt} | <span>{data?.applicants} Applicants</span>
      </h4>
      <div className={classes.footerWrapper}>
        <Button label={"Apply Now"} />
        <FaRegBookmark color="#AAAAAA" />
      </div>
    </div>
  );
}
