import React from "react";
import classes from "./FilterComponent.module.css";
import { Input } from "../Input";
import { DropDown } from "../DropDown";
import { Button } from "../Button";
import { BiSearch } from "react-icons/bi";

export default function FilterComponent({
  search,
  setSearch,
  location,
  setLocation,
  jobType,
  setJobType,
  onclick,
}) {
  return (
    <div className={classes.mainWrapper}>
      <Input
        value={search}
        setter={(e) => setSearch(e)}
        placeholder="Job Title, Company, or Keywords"
        inputStyle={{
          border: "none",
          padding: "6px",
          minWidth: "250px",
        }}
      />
      <DropDown
        options={locationOptions}
        value={location}
        setter={setLocation}
        customStyle={{
          border: "none",
          padding: 0,
          borderRadius: 0,
          borderLeft: "1px solid var(--border-color)",
          minWidth: "120px",
        }}
      />
      <DropDown
        options={jobTypeOptions}
        value={jobType}
        setter={setJobType}
        customStyle={{
          border: "none",
          padding: 0,
          borderRadius: 0,
          borderLeft: "1px solid var(--border-color)",
          minWidth: "120px",
        }}
      />
      <Button
        label={"Search"}
        leftIcon={<BiSearch />}
        customStyle={{ minWidth: "105px" }}
      />
    </div>
  );
}
const locationOptions = [
  { label: "Location 1", value: "location1" },
  { label: "Location 2", value: "location2" },
  { label: "Location 3", value: "location3" },
];
const jobTypeOptions = [
  { label: "Job Type 1", value: "jobType1" },
  { label: "Job Type 2", value: "jobType2" },
  { label: "Job Type 3", value: "jobType3" },
];
