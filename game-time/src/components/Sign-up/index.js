import React from 'react';

function SignupFunc() {
    return (
        <section>
            <h2>Sign Up</h2>
            <form> 
                    <label>Email:</label>  
                    <input type="text" name="email"/>
                    <label>Username:</label>  
                    <input type="text" name="username"/>
                    <label>Password:</label>  
                    <input type="text" name="password"/>
                    <button type='submit'>Submit</button>
                </form>
        </section>
    )
}

export default SignupFunc;