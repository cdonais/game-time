import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../utils/mutations";

import Auth from "../utils/auth";

const Create = (props) => {
  const [formState, setFormState] = useState({
    gameLocation: "",
    gameDate: "",
    gameTime: "",
    createdBy: "",
    skillLevel: "",
  });

  const [create, { error }] = useMutation(ADD_GAME);

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
      const { data } = await create({
        variables: { ...formState },
      });

      Auth.create(data.create.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      gameLocation: "",
      gameDate: "",
      gameTime: "",
      createdBy: "",
      skillLevel: "",
    });
  };

  return (
    <section>
      <h2>Create Game:</h2>
      <form className="container" onSubmit={handleFormSubmit}>
        <div>
          <label className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            Location:
            <input
              type="text"
              name="gameLocation"
              value={formState.gameLocation}
              onChange={handleChange}
            />
          </label>
          <label className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            Date:
            <input
              type="date"
              name="gameDate"
              value={formState.gameDate}
              onChange={handleChange}
            />
          </label>
          <label className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            Time:
            <input
              type="time"
              name="gameTime"
              value={formState.gameTime}
              onChange={handleChange}
            />
          </label>
          <label className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            Created By:
            <input
              type="text"
              name="createdBy"
              value={formState.createdBy}
              onChange={handleChange}
            />
          </label>
          <label className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            Skill Level:
            <input
              type="text"
              name="skillLevel"
              value={formState.skillLevel}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <div>Game creation failed</div>}
    </section>
  );
};

export default Create;
