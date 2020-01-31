import React, { Component } from 'react'
//https://newsapi.org/docs/get-started
export class StarNuws extends Component {
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
                StarNuws
            </main>
        )
    }
}

export default StarNuws
