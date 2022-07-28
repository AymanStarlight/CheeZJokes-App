import axios from 'axios'
import React, { Component } from 'react'
import Joke from './Joke'
import './css/Main.css'

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }
        this.deleteLS = this.deleteLS.bind(this)
        this.fetchJokes = this.fetchJokes.bind(this)
    }
    async fetchJokes() {
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
    async componentDidMount() {

        if (localStorage.jokes) {
            let js = JSON.parse(localStorage.jokes)
            js.forEach(j => this.setState(st => ({
                jokes: [...st.jokes, j]
            })))
        } else {
            this.fetchJokes()
        }
    }

    componentDidUpdate() {
        localStorage.setItem('jokes', JSON.stringify(this.state.jokes))

    }

    async deleteLS() {
        localStorage.clear()
        this.setState({ jokes: [] })
        this.fetchJokes()
    }

    render() {

        let jokes = this.state.jokes.map(j => <Joke key={j.id} j={j.joke} />)
        return (
            <div className='Main'>
                <div className="Main-Jokes">
                    {jokes}
                </div>
                <button onClick={this.deleteLS}>Reload Jokes</button>
            </div>
        )
    }
}

export default Main