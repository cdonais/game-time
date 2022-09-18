import React from 'react';
function Login() {
    return (
        <section>
                <h2>Login</h2>
                <form>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                    <label>Password:</label>
                    <input type="text" name="password"/>
                    <button type='submit'>Submit</button>
                </form>
        </section>
    )
}
export default Login;







