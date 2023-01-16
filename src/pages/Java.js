import React from "react";
import { Outlet } from "react-router-dom";

export const Java = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <div className="list-group-item">
              <h5>JAVA Tutorial</h5>
            </div>
            <div className="list-group-item">
              <a href="/java/home">JAVA HOME</a>
            </div>
            <div className="list-group-item">
              <a href="/java/intro">JAVA Intro</a>
            </div>
            <div className="list-group-item">
              <a href="/java/getstarted">JAVA Get Started</a>
            </div>
            <div className="list-group-item">
              <a href="/java/syntax">JAVA Syntax</a>
            </div>
            <div className="list-group-item">
              <a href="/java/output">JAVA Output</a>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <h2>JAVA page</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
