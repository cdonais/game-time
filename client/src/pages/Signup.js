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
    <section className="signupform">
      <h2>Sign Up:</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        {/* <section className="skill">
          <h3>Skill Level:</h3>
          <input type="radio" value="Beginner" name="skill" /> Beginner
          <input type="radio" value="Intermediate" name="skill" /> Intermediate
          <input type="radio" value="Advanced" name="skill" /> Advanced
        </section> */}
        <button type="submit">Submit</button>
      </form>

      {error && <div>Signup failed</div>}
    </section>
  );
};

export default Signup;
