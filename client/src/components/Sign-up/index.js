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
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <section className='skill'>
              <h3>Skill Level:</h3>  
             <input type="radio" value="Beginner" name="skill"/> Beginner
             <input type="radio" value="Intermediate" name="skill"/> Intermediate   
             <input type="radio" value="Advanced" name="skill"/> Advanced 
             <input type="submit" value="Submit" />  
   
            </section>
            </form>
        </section>
    );
}

export default Signup;