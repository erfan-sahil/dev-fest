import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col border border-black rounded-md p-4">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login as</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm ">
      <form className="card-body flex">
        <div className='flex'>
        <div className="form-control mt-6 mr-5">
        <Link to={"/teacher"}>
          <button className="btn btn-primary">Teacher</button>
        </Link>
        </div>

        <div className="form-control mt-6">
            <Link to={'/student'}>
            <button className="btn btn-primary">Student</button>
            </Link>
        </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;