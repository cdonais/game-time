import React from 'react';

function Signup() {
    return (
        <section className='my-5'>
          <form>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Signup;