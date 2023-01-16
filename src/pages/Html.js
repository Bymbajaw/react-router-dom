import { Outlet } from "react-router-dom";

export const Html = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <div className="list-group-item">
              <h5>
                HTML Tutorial
              </h5>
            </div>
            <div className="list-group-item">
              <a href="/html/home">HTML HOME</a>
            </div>
            <div className="list-group-item">
              <a href="/html/introduction">HTML Introduction</a>
            </div>
            <div className="list-group-item">
              <a href="/html/editors">HTML Editors</a>
            </div>
            <div className="list-group-item">
              <a href="/html/basic">HTML Basic</a>
            </div>
            <div className="list-group-item">
              <a href="/html/elements">HTML Elements</a>
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
