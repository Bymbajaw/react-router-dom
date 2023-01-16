import React from 'react'
import { Outlet } from 'react-router-dom'

export const Python = () => {
  return (
    <div>
    <div className="row">
      <div className="col-md-3">
        <div className="list-group">
          <div className="list-group-item">
            <h5>
              Python Tutorial
            </h5>
          </div>
          <div className="list-group-item">
            <a href="/python/home">PYTHON HOME</a>
          </div>
          <div className="list-group-item">
            <a href="/python/intro">PYTHON Intro</a>
          </div>
          <div className="list-group-item">
            <a href="/python/getstarted">PYTHON Get Started</a>
          </div>
          <div className="list-group-item">
            <a href="/python/syntax">PYTHON Syntax</a>
          </div>
          <div className="list-group-item">
            <a href="/python/comments">PYTHON Comments</a>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <h2>Python page</h2>
        <Outlet />
      </div>
    </div>
  </div>
  )
}
