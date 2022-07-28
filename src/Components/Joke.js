import React, { Component } from 'react'

import './css/Joke.css'

export class Joke extends Component {
    state = {
        rating: 0
    }
    render() {
        return (
            <div className='Joke'>
                <div className="Joke-rating">
                    <button id="Up">▲</button>
                    <p id="rating">{this.state.rating}</p>
                    <button id="Down">▼</button>
                </div>
                <p className='Joke-C'>{this.props.j}</p>
            </div>
        )
    }
}

export default Joke