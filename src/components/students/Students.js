import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div data-theme="lemonade">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fstudent-vector-illustration-cartoon_58978782.htm&psig=AOvVaw2Wh8qxpqigmncnd2s3oqIO&ust=1701844907128000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPC8tsKo9YIDFQAAAAAdAAAAABAE">

          </img> */}
          <ul className="menu p-4 w-80 min-h-full bg-yellow-100 text-base-content">
            {/* Sidebar content here */}
            <Link className="text-xl font-semibold hover:bg-yellow-200 hover:rounded-md hover:text-whit" to={"/studentProfile"}> Student Profile </Link>
            <Link className="text-xl font-semibold  hover:bg-yellow-200 hover:rounded-md hover:text-whit" to={"/myClass"}> My Class </Link>
            <Link className="text-xl font-semibold  hover:bg-yellow-200 hover:rounded-md hover:text-whit" to={"/online"}> Online </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Students;
