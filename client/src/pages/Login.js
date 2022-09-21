import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <section className="container">
      <h2 className="row justify-content-center">Login</h2>
      <form
        onSubmit={handleFormSubmit}
        className="row justify-content-center text-center"
      >
        <div className="m-2 col-sm-12 col-lg-6">
          <label className="col-sm-12 col-lg-6">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="blah@pmail.com"
            value={formState.email}
            onChange={handleChange}
            className="w-50"
          />
        </div>
        <div className="m-2 col-sm-12 col-lg-6">
          <label className="col-sm-12 col-lg-6">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="..."
            value={formState.password}
            onChange={handleChange}
            className="w-50 mb-4"
          />
        </div>

        <button type="submit" className="w-50 col-sm-12">
          Submit
        </button>
      </form>

      {error && <div>Login failed</div>}
    </section>
  );
};

export default Login;
