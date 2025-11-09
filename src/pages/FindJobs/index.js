import { useState } from "react";
import BodySkeleton from "../../components/BodySkeleton";
import {
  ProfileCover,
  ProfilePhoto,
  TeamsIcon,
} from "../../constants/imagePath";
import classes from "./FindJobs.module.css";
import UserProfileComponent from "../../components/UserProfileComponent";
import UserInsightsComponent from "../../components/UserInsightsComponent";
import MyCalendarComponent from "../../components/MyCalendarComponent";
import FilterComponent from "../../components/FilterComponent";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import JobCard from "../../components/JobCard";

export default function FindJobs() {
  const [userProfileData, setUserProfileData] = useState(userProfileDummy);
  const [userInsights, setUserInsights] = useState(userInsightsDummy);
  const [scheduledInterview, setScheduledInterview] =
    useState(userInterviewsDummy);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [jobType, setJobType] = useState(null);
  const [jobData, setJobData] = useState(jobCardDummy);
  return (
    <BodySkeleton>
      <div className={classes.mainWrapper}>
        <div className={classes.leftWrapper}>
          <UserProfileComponent data={userProfileData} />
          <UserInsightsComponent data={userInsights} />
          <MyCalendarComponent data={scheduledInterview} />
        </div>
        <div className={classes.rightWrapper}>
          <div className={classes.headingWrapper}>
            <h4>
              Find your Dream Job, <span>{userProfileData?.firstName}!</span>
            </h4>
            <p>
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
          </div>
          <FilterComponent
            search={search}
            setSearch={setSearch}
            jobType={jobType}
            setJobType={setJobType}
            location={location}
            setLocation={setLocation}
          />
          <div className={classes.similarJobsTabs}>
            <p>Similar:</p>
            <div>
              <Button label={"Frontend"} variant="bordered" />
              <Button label={"Backend"} variant="bordered" />
              <Button label={"Graphic Designer"} variant="bordered" />
            </div>
          </div>
          <div className={classes.cardsSection}>
            <h4>
              Featured Jobs <Link>See Featured Jobs</Link>
            </h4>
            <div>
              {jobData?.slice(0, 5)?.map((ele) => (
                <JobCard data={ele} type={"featured"} />
              ))}
            </div>
          </div>
          <div className={classes.cardsSection}>
            <h4>
              Recommended Jobs <Link>See Recommended Jobs</Link>
            </h4>
            <div>
              {jobData?.map((ele) => (
                <JobCard data={ele} />
              ))}
            </div>
          </div>
          <div className={classes.cardsSection}>
            <h4>
              Latest Jobs <Link>See Latest Jobs</Link>
            </h4>
            <div>
              {jobData?.map((ele) => (
                <JobCard data={ele} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BodySkeleton>
  );
}
const userProfileDummy = {
  cover: ProfileCover,
  profile: ProfilePhoto,
  firstName: "Albert",
  name: "Albert Flores",
  roles:
    "Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer",
  location: "Clinton, Maryland",
};
const userInsightsDummy = {
  visitors: 140,
  resumeViewers: 20,
  myJobs: 88,
};

const userInterviewsDummy = Array(3)
  .fill("")
  .map((_, index) => ({
    company: ["Transviti", "Folio", "Systems"][index % 3],
    date: ["12 October", "30 October", "5 December"][index % 3],
  }));

const jobCardDummy = Array(10)
  .fill("")
  .map((_, index) => ({
    _id: index + 1,
    title: "UI/UX Designer",
    platform: "Teams",
    photo: TeamsIcon,
    location: "Seattle, USA (Remote)",
    createdAt: "1 day ago",
    applicants: 22,
  }));
