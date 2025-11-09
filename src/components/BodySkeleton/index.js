import React from "react";
import classes from "./BodySkeleton.module.css";
import Header from "../Header";
import { Container } from "react-bootstrap";

export default function BodySkeleton({ children }) {
  return (
    <div>
      <Header />
      <div className={classes.mainWrapper}>
        <Container>{children}</Container>
      </div>
    </div>
  );
}
