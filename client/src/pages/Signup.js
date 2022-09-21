import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section className="container">
      <h2 className="row justify-content-center">Sign Up:</h2>
      <form
        onSubmit={handleFormSubmit}
        className="row justify-content-center text-center"
      >
        <label>
          <div>Email:</div>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <div>Username:</div>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label className="col-sm-12 mb-4">
          <div>Password:</div>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit" className="w-50">
            Submit
          </button>
        </div>
      </form>

      {error && <div>Signup failed</div>}
    </section>
  );
};

export default Signup;
