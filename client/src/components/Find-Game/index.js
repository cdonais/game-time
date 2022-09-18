import React from 'react';

function FindGame() {
    const list = [
        {
            id:1,
            date: "9-20-2022",
            time: "5:00pm",
            location:"Tanja King Park",
            skill: "Intermediate"
    
        },
        {
            id:2,
            date: "9-22-2022",
            time: "3:00pm",
            location:"Weston Regional Park",
            skill: "Advanced"
    
        },
        {
            id:3,
            date: "9-24-2022",
            time: "9:00am",
            location:"Turkey Lake Park",
            skill: "Beginner"
    
        },



    ]
    return (
        <section>
            <h2 id="find">Find a Game:</h2>

            <ul>
                {list.map(game=>(
                    <li key={game.id}>
                        Date:{game.date}
                        <br></br>
                        Time:{game.time}
                        <br></br>
                        Location:{game.location}
                        <br></br>
                        Skill Level:{game.skill}
                        </li>
                ))}
                {/* <li>Saturday, September 18th 9am Tanja King Park</li>
                <li>Monday, September 19th 5pm Weston Regional Park</li> */}
            </ul>
        </section>
    )
}

export default FindGame;