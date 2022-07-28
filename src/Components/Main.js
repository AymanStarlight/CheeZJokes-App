import axios from 'axios'
import React, { Component } from 'react'
import Joke from './Joke'

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }

    }
    async componentDidMount() {
        let URL = 'https://icanhazdadjoke.com/'
        let Js = []
        for (let i = 0; i < 11; i++) {

            let response = await axios.get(URL, {
                headers: {
                    Accept: 'application/json'
                }
            })

            Js.push(response.data)
        }
        Js.forEach(j => this.setState(st => ({
            jokes: [...st.jokes, j]
        })))


    }
    render() {
        let jokes = this.state.jokes.map(j => <Joke key={j.id} j={j.joke} />)
        return (
            <div className='Main'>
                <div className="Main-Jokes">
                    {jokes}
                </div>

            </div>
        )
    }
}

export default Main