import React, { Component } from 'react'

export class Cards extends Component {
    hendelDetalsFilm = id => {
        this.props.DetalsFilm(id);
    }
    render() {
        const { films } = this.props;
        return (
            <div className="row">
                {films.map(item => (
                    <div className="card bgcard col-5 offset-1 colorcard" style={{ width: '18rem', marginBottom: '3%' }} key={item.episode_id}>
                        <div className="card-body">
                            <span><h4 className="card-title colorcard">Film:{item.title}</h4><h5 className='colorcard'>The episode number:{item.episode_id}</h5></span>
                            <h5 className="card-subtitle mb-2 text-muted colorcard">The name of the director: <strong>{item.director}</strong></h5>
                            <h6 className="card-subtitle mb-2 text-muted colorcard">The name(s) of the producer(s): <strong>{item.producer}</strong> </h6>
                            <strong className='colorcard'>The ISO 8601 date format of film:{item.release_date}</strong>
                        </div>
                        <button type='button' onClick={() => this.hendelDetalsFilm(item.episode_id)} className='btn btn-link'>In detail by:{item.episode_id}</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Cards
