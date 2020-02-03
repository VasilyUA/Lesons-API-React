import React, { Component } from 'react'

export class Vehicles extends Component {
    render() {
        const { Vehicle } = this.props;
        console.log(Vehicle);
        return (
            <div className="row">
                {Vehicle.map(item => (
                    <div className="card bgcard col-5 offset-1 colorcard" style={{ width: '18rem', marginBottom: '3%' }} key={item.name}>
                        <div className="card-body">
                            <span><h4 className="card-title colorcard">Name:{item.name}</h4><h5 className='colorcard'>The maximum number of kilograms that this vehicle can transport:{item.cargo_capacity}</h5></span>
                            <h5 className="card-subtitle mb-2 colorcard"><strong>{item.consumables}</strong></h5>
                            <h5 className="card-subtitle mb-2 colorcard">The cost of this vehicle new, in Galactic Credits:<strong>{item.cost_in_credits}</strong></h5>
                            <h6 className="card-subtitle mb-2 colorcard">The number of personnel needed to run or pilot this vehicle: <strong>{item.crew}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">The length of this vehicle in meters: <strong>{item.length}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">The manufacturer of this vehicle. Comma separated if more than one: <strong>{item.manufacturer}</strong> </h6>
                            <strong className='colorcard'>The maximum speed of this vehicle in the atmosphere:{item.max_atmosphering_speed}</strong>
                            <strong className='colorcard'>The model or official name of this vehicle:{item.model}</strong>
                            <strong className='colorcard'>The number of non-essential people this vehicle can transport:{item.passengers}</strong>
                            <strong className='colorcard'>The class of this vehicle, such as "Wheeled" or "Repulsorcraft":{item.vehicle_class}</strong>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Vehicles
