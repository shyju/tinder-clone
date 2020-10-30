import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';

import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Shyju',
            url: 'https://instagram.fcok6-1.fna.fbcdn.net/v/t51.2885-15/e35/36148945_459182384533884_8446577018975289344_n.jpg?_nc_ht=instagram.fcok6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=aj2zravyj8cAX-LnWjE&tp=18&oh=7e461c30ebbab031e54a97ee891b1754&oe=5FC71AC4'
        },
        {
            name: 'Shyju',
            url: 'https://instagram.fcok6-1.fna.fbcdn.net/v/t51.2885-15/e35/31210995_2089179441360847_3280071282778963968_n.jpg?_nc_ht=instagram.fcok6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=fgpGomV3sxkAX-TcACN&tp=18&oh=40f1c0d1419e1aff0502978db7caae50&oe=5FC53EAF'
        }
    ]);

    const swiped = (direction , nameToDelete) => {
        //
    }

    const outOfFrame = (name) => {

    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe= {(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div 
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default TinderCards
