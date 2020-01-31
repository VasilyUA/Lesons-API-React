import React from 'react'

export default function Piople(people) {
    const { People } = people;
    return (
        <div className="row">
            {People.map(item => (
                <div className="card bgcard col-5 offset-1 colorcard" style={{ width: '18rem', marginBottom: '3%' }} key={item.name}>
                    <div className="card-body">
                        <span><h4 className="card-title colorcard">Name:{item.name}</h4><h5 className='colorcard'>The birth year of the person:{item.birth_year}</h5></span>
                        <h5 className="card-subtitle mb-2 colorcard">The eye color of this person: <strong>{item.hair_color}</strong></h5>
                        <h5 className="card-subtitle mb-2 colorcard">The gender of this person: <strong>{item.gender}</strong></h5>
                        <h6 className="card-subtitle mb-2 colorcard">The height of the person: <strong>{item.height}</strong> </h6>
                        <h6 className="card-subtitle mb-2 colorcard">The mass of the person: <strong>{item.mass}</strong> </h6>
                        <h6 className="card-subtitle mb-2 colorcard">The skin color of this person: <strong>{item.skin_color}</strong> </h6>
                        <strong className='colorcard'>The ISO 8601 date format of the time that this resource was created:{item.created}</strong>
                        <strong className='colorcard'>The ISO 8601 date format of the time that this resource was edited:{item.release_date}</strong>
                    </div>
                </div>
            ))}
            )}
        </div>
    )
}
