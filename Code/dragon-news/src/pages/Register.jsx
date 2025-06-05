import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-2xl font-semibold">Register your account</h1>
              <form className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {/* Image URL */}
                <label className="label">Image URL</label>
                <input
                  name="imgURL"
                  type="text"
                  className="input"
                  placeholder="Image URL"
                />
                {/* Emails */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                {/* Passwords */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4">Register</button>
                <p className="font-semibold text-center pt-5">
                  Already Have An Account?{' '}
                  <NavLink className={'text-secondary'} to={'/auth/login'}>
                    Login
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
