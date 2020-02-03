import React, { Component } from 'react'

export class Species extends Component {
    render() {
        const { Species } = this.props;
        return (
            <div className="row">
                {Species.map(item => (
                    <div className="card bgcard col-5 offset-1 colorcard" style={{ width: '18rem', marginBottom: '3%' }} key={item.name}>
                        <div className="card-body">
                            <span><h4 className="card-title colorcard">Name:{item.name}</h4><h5 className='colorcard'>The average height of this species:{item.average_height }</h5></span>
                            <h5 className="card-subtitle mb-2 colorcard">The average lifespan of this species: <strong>{item.average_lifespan }</strong></h5>
                            <h5 className="card-subtitle mb-2 colorcard">The classification of this species: <strong>{item.classification}</strong></h5>
                            <h6 className="card-subtitle mb-2 colorcard">The designation of this species: <strong>{item.designation}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">A comma-separated string of common eye colors for this species: <strong>{item.eye_colors}</strong> </h6>
                            <h6 className="card-subtitle mb-2 colorcard">A comma-separated string of common hair colors for this species: <strong>{item.hair_colors}</strong> </h6>
                            <strong className='colorcard'>The language commonly spoken:{item.language}</strong>
                            <strong className='colorcard'>The language commonly spoken:{item.skin_colors}</strong>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Species
