import React from "react";
import classes from "./MyCalendarComponent.module.css";
import { Accordion } from "react-bootstrap";

export default function MyCalendarComponent({ data }) {
  return (
    <div className={classes.mainWrapper}>
      <Accordion>
        <Accordion.Header>
          <div className={classes.headerContent}>
            <h4>My Calendar</h4>
            <p>Upcoming Interviews</p>
          </div>
        </Accordion.Header>
        {data?.map((ele) => (
          <Accordion.Body>
            <p className={classes.bodydata}>
              {ele?.company} <span>{ele?.date}</span>
            </p>
          </Accordion.Body>
        ))}
      </Accordion>
    </div>
  );
}
