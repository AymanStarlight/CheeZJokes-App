import React, { Component } from 'react'

import './css/Joke.css'

export class Joke extends Component {
    state = {
        rating: 0
    }

    upVote = () => {
        this.setState(st => ({
            rating: st.rating + 1
        }))
    }

    downVote = () => {
        this.setState(st => ({
            rating: st.rating - 1
        }))
    }

    render() {
        return (
            <div className='Joke'>
                <div className="Joke-rating">
                    <button id="Up" onClick={this.upVote}>▲</button>
                    <p id="rating">{this.state.rating}</p>
                    <button id="Down" onClick={this.downVote}>▼</button>
                </div>
                <p className='Joke-C'>{this.props.j}</p>
            </div>
        )
    }
}

export default Joke