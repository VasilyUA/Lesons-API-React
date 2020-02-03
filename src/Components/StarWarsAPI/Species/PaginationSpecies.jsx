import React, { Component } from 'react'
import { MDBNavLink } from 'mdbreact';

export class PaginationSpecies extends Component {
    render() {
        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <MDBNavLink className="page-link" to="#">Previous</MDBNavLink>
                        </li>
                        <li className="page-item"><MDBNavLink className="page-link" to="#">1</MDBNavLink></li>
                        <li className="page-item"><MDBNavLink className="page-link" to="#">2</MDBNavLink></li>
                        <li className="page-item"><MDBNavLink className="page-link" to="#">3</MDBNavLink></li>
                        <li className="page-item">
                            <MDBNavLink className="page-link" to="#">Next</MDBNavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default PaginationSpecies
