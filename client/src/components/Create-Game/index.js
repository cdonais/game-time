import React from "react";

function Create() {
  return (
    <section>
      <h2>Create Game:</h2>
      <form>
        <label>
          Location:
          <input type="text" name="location" />
        </label>
        <label>
          Date:
          <input type="text" name="date" />
        </label>
        <label>
          Time:
          <input type="text" name="time" />
        </label>
        <label>
          <h3>Skill Level:</h3>
          <input type="radio" value="Beginner" name="skill" /> Beginner
          <input type="radio" value="Intermediate" name="skill" /> Intermediate
          <input type="radio" value="Advanced" name="skill" /> Advanced
          <button type="submit">Submit</button>
        </label>
      </form>
    </section>
  );
}

export default Create;
