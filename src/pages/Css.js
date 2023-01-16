import { Outlet } from "react-router-dom";

export const Css = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <div className="list-group-item">
              <h5>
                CSS Tutorial
              </h5>
            </div>
            <div className="list-group-item">
              <a href="/css/home">CSS HOME</a>
            </div>
            <div className="list-group-item">
              <a href="/css/introduction">CSS Introduction</a>
            </div>
            <div className="list-group-item">
              <a href="/css/syntax">CSS Syntax</a>
            </div>
            <div className="list-group-item">
              <a href="/css/selector">CSS Selector</a>
            </div>
            <div className="list-group-item">
              <a href="/css/howto">CSS How To</a>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <h2>CSS page</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
