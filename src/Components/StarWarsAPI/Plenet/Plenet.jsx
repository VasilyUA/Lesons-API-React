import React, { Component } from 'react'

export class Plenet extends Component {
    render() {
        const { Plenet } = this.props;
        return (
            <div className="row">
                {Plenet.map(item => (
                    <div className="card bgcard col-5 offset-1 colorcard" style={{ width: '18rem', marginBottom: '3%' }} key={item.name}>
                        <div className="card-body">
                            <span><h4 className="card-title colorcard">Name:{item.name}</h4><h5 className='colorcard'>The name of this planet:{item.birth_year}</h5></span>
                            <h5 className="card-subtitle mb-2 colorcard">The diameter of this planet in kilometers: <strong>{item.diameter}</strong></h5>
                            <h5 className="card-subtitle mb-2 colorcard">The number of standard hours it takes for this planet: <strong>{item.rotation_period}</strong></h5>
                            <h6 className="card-subtitle mb-2 colorcard">A number denoting the gravity of this planet: <strong>{item.gravity}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">The average population of sentient beings inhabiting this planet: <strong>{item.population}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">The climate of this planet: <strong>{item.climate}</strong> </h6>
                            <strong className='colorcard'>The terrain of this planet:{item.terrain}</strong>
                            <strong className='colorcard'>The percentage of the planet:{item.surface_water}</strong>
                            <strong className='colorcard'>The percentage of the planet:{item.surface_water}</strong>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Plenet
