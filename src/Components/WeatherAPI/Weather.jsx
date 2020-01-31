import React, { Component } from 'react'
//https://openweathermap.org/

export class Weather extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.getStarWars();
    }

    getStarWars = () => {
        // fetch("")
        //     .then((response) => response.json())
        //     .then((response) => { console.log(response.results) })
    }

    render() {
        return (
            <main>
               Weather
            </main>
        )
    }
}

export default Weather
