import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const imgURL = e.target.imgURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, imgURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: imgURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: imgURL });

            navigate('/');
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-2xl font-semibold">Register your account</h1>
              <form onSubmit={handelRegister} className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                {/* Image URL */}
                <label className="label">Image URL</label>
                <input
                  name="imgURL"
                  type="text"
                  className="input"
                  placeholder="Image URL"
                  required
                />
                {/* Emails */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* Passwords */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
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
