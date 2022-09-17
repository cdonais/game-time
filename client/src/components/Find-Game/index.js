import React from 'react';

function FindGame() {
    const list = [
        {
            id:1,
            game:"Tanja King Park"
    
        },
        {
            id:2,
            game:"Weston Regional Park"
    
        },
        {
            id:3,
            game:"Turkey Lake Park"
    
        },



    ]
    return (
        <section>
            <h2 id="find">Find a Game</h2>

            <ul>
                {list.map(game=>(
                    <li key={game.id}>{game.game}</li>
                ))}
                {/* <li>Saturday, September 18th 9am Tanja King Park</li>
                <li>Monday, September 19th 5pm Weston Regional Park</li> */}
            </ul>
        </section>
    )
}

export default FindGame;