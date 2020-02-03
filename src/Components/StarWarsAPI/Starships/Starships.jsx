import React, { Component } from 'react'

export class Starships extends Component {
    render() {
        const { Starship } = this.props;
        return (
            <div className="row">
                {Starship.map(item => (
                    <div className="card bgcard col-5 offset-1 colorcard" style={{ width: '18rem', marginBottom: '3%' }} key={item.name}>
                        <div className="card-body">
                            <span><h4 className="card-title colorcard">Name:{item.name}</h4><h5 className='colorcard'>The Maximum number of Megalights this starship:{item.MGLT}</h5></span>
                            <h5 className="card-subtitle mb-2 colorcard">The maximum number of kilograms that this starship: <strong>{item.cargo_capacity}</strong></h5>
                            <h5 className="card-subtitle mb-2 colorcard"><strong>{item.consumables}</strong></h5>
                            <h6 className="card-subtitle mb-2 colorcard">The maximum number of kilograms that this starship: <strong>{item.cost_in_credits}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">The number of personnel needed to run or pilot this starship: <strong>{item.crew}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">The class of this starships hyperdrive: <strong>{item.hyperdrive_rating}</strong> </h6>
                            <strong className='colorcard'>The length of this starship in meters:{item.length}</strong>
                            <strong className='colorcard'>The manufacturer of this starship:{item.manufacturer}</strong>
                            <strong className='colorcard'>The maximum speed of this starship in the atmosphere:{item.max_atmosphering_speed}</strong>
                            <strong className='colorcard'>The model or official name of this starship:{item.model}</strong>
                            <strong className='colorcard'>The number of non-essential people this starship can transport:{item.passengers}</strong>
                            <strong className='colorcard'>The class of this starship:{item.starship_class}</strong>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Starships
