import React from 'react';

function Signup() {
    return (
        <section className='signupform'>
            <h2>Sign Up:</h2>
          <form>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <input type="submit" value="Submit" />
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
            <section className='skill'>
              <h3>Skill Level:</h3>  
             <input type="radio" value="Beginner" name="skill"/> Beginner
             <input type="radio" value="Intermediate" name="skill"/> Intermediate   
             <input type="radio" value="Advanced" name="skill"/> Advanced   
   
            </section>
            </form>
        </section>
    );
}

export default Signup;