import React, { Component, Fragment } from 'react'
import Spinner from '../../Loder/Double Ring-1s-200px.svg';

export class OnePage extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            isLoadingFilms: false,
        }
    }


    componentDidMount() {
        this.getFilms();
    }

    getFilms = () => {
        this.setState({
            isLoadingFilms: true
        })
        const { id } = this.props.match.params;
        fetch(`https://swapi.co/api/films/${id}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    films: response,
                    isLoadingFilms: false
                })
            })
    }
    Cards = () => {
        this.props.history.push(`/starwars`)
    }

    render() {
        const { films, isLoadingFilms } = this.state;
        return (
            <main className='bgcard'>
                {films ? (
                    <Fragment>
                        {isLoadingFilms ? (<img src={Spinner} alt="loder" width="100%" height="650" />) : (
                            <Fragment>
                                <button type="button" onClick={() => this.Cards()} className="btn btn-link">Back</button>
                                <div className="container">
                                    <h1 className="colorcard" style={{ textAlign: 'center' }}> <strong>The title of this film:</strong> {films.title}</h1>
                                    <h2 className="colorcard" style={{ textAlign: 'center' }}> <strong>The episode number of this film:</strong> {films.episode_id}</h2>
                                    <p className="colorcard" style={{ textAlign: 'center' }}> <strong>The opening paragraphs at the beginning of this film:</strong> {films.opening_crawl}</p>
                                    <p className="colorcard" > <strong>The name of the director of this film:</strong> {films.director}</p>
                                    <p className="colorcard" > <strong>The name of the producer of this film. Comma separated:</strong> {films.producer}</p>
                                </div>
                            </Fragment>)}
                    </Fragment>) : (null)}
            </main>
        )
    }
}

export default OnePage
