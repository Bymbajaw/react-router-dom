import { Outlet } from "react-router-dom";

export const JS = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <div className="list-group-item">
              <h5>
                JS Tutorial
              </h5>
            </div>
            <div className="list-group-item">
              <a href="/javascript/home">JS HOME</a>
            </div>
            <div className="list-group-item">
              <a href="/javascript/introduction">JS Introduction</a>
            </div>
            <div className="list-group-item">
              <a href="/javascript/whereto">JS Where To</a>
            </div>
            <div className="list-group-item">
              <a href="/javascript/output">JS Output</a>
            </div>
            <div className="list-group-item">
              <a href="/javascript/statements">JS Statements</a>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <h2>Javascript page</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
