import React, { Component } from 'react'

export class PaginatPeople extends Component {

  HendelPrevious = () => {
    console.log("obgect")
  }
  HendelNext = () => {
    console.log("obgect")
  }
  HendelNambers = id =>{
    this.props.onHendelNambers(id);
  }

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={() => this.HendelPrevious(1)}>Previous</button>
          </li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(1)} className="page-link">1</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(2)} className="page-link">2</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(3)} className="page-link">3</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(4)} className="page-link">4</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(5)} className="page-link">5</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(6)} className="page-link">6</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(7)} className="page-link">7</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(8)} className="page-link">8</button></li>
          <li className="page-item"><button type='button' onClick={() => this.HendelNambers(9)} className="page-link">9</button></li>
          <li className="page-item">
            <button type='button' className="page-link" onClick={() => this.HendelNext(1)}>Next</button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default PaginatPeople
