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
      console.log(data);
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
    <section className="container">
      <div className="row">
        <h2 className="col-sm-12 text-center">Create Game:</h2>
      </div>

      <form onSubmit={handleFormSubmit} className="row">
        <label className="col-sm-12 col-md-4 col-xl-2 text-center">
          <div>Location:</div>
          <input
            type="text"
            name="gameLocation"
            value={formState.gameLocation}
            onChange={handleChange}
            className="w-100"
          />
        </label>
        <label className="col-sm-12 col-md-4 col-xl-2 text-center">
          <div>Date:</div>
          <input
            type="date"
            name="gameDate"
            value={formState.gameDate}
            onChange={handleChange}
            className="w-100 text-center"
          />
        </label>
        <label className="col-sm-12 col-md-4 col-xl-2 text-center">
          <div>Time:</div>
          <input
            type="time"
            name="gameTime"
            value={formState.gameTime}
            onChange={handleChange}
            className="w-100 text-center"
          />
        </label>
        <label className="col-sm-12 col-md-4 col-xl-2 text-center">
          <div>Created By:</div>
          <input
            type="text"
            name="createdBy"
            value={formState.createdBy}
            onChange={handleChange}
            className="w-100 text-center"
          />
        </label>
        <label className="col-sm-12 col-md-4 col-xl-2 text-center">
          <div>Skill Level:</div>
          <input
            type="text"
            name="skillLevel"
            value={formState.skillLevel}
            onChange={handleChange}
            className="w-100 text-center"
          />
        </label>
        <div className="col-sm-12 col-md-4 col-xl-2 text-center">
          <br></br>
          <button type="submit" className="w-100 text-center">
            Submit
          </button>
        </div>
      </form>

      {error && <div>Game creation failed</div>}
    </section>
  );
};

export default Create;
