import React, { Component, Fragment } from 'react';
import Spinner from '../Loder/Double Ring-1s-200px.svg';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from
    "mdbreact";

//CSS
import "./StarWars.css";

//Components
import Cards from './Films/Cards'
import PaginatPeople from './Piople/PaginatPeople'
import Piople from './Piople/Piople'
import Plenet from './Plenet/Plenet'
import PaginationPlenet from './Plenet/PaginationPlenet'
import Speciess from './Species/Species'
import PaginationSpecies from './Species/PaginationSpecies'
import Starships from './Starships/Starships'
import PaginationStarships from './Starships/PaginationStarships'
import Vehicles from './Vehicles/Vehicles'
import PaginationVehicles from './Vehicles/PaginationVehicles'

export class StarWars extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
            isLoading: false,
            People: [],
            paginationPeople: '1',
            Plenets: [],
            paginationPlanets: '1',
            Species: [],
            paginationSpecies: '1',
            Starship: [],
            paginationStarship: '1',
            Vehicle: [],
            paginationVehicle: '1',
            //Lococ components
            activeItemJustified: "1",
            //Lococ components
        }
    }


    componentDidMount() {
        this.getStarWarsFilms();
        this.getStarWarsPiople();
        this.getStarWarsPlanets();
        this.getStarWarsSpecies();
        this.getStarWarsStarships();
        this.getStarWarsVehicles();
    }

    UNSAFE_componentWillUpdate(prevProps, prevState) {
        if (prevState.paginationPeople !== this.state.paginationPeople) {
            this.getStarWarsPiople();
        }
    }

    getStarWarsFilms = () => {
        this.setState({
            isLoading: true
        })
        fetch("https://swapi.co/api/films/?page=1")//max page=1 пошук &search=r2
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    films: response.results,
                    isLoading: false
                })
            })
    }
    getStarWarsPiople = () => {
        this.setState({
            isLoading: true
        })
        let { paginationPeople } = this.state;
        fetch(`https://swapi.co/api/people/?page=${paginationPeople}`)//max(page=9)  пошук(&search=r2) 
            .then((response) => response.json())
            .then(({ results }) => {
                this.setState({
                    People: results,
                    isLoading: false
                })
            })
    }
    getStarWarsPlanets = () => {
        this.setState({
            isLoading: true
        })
        let { paginationPlanets } = this.state;
        fetch(`https://swapi.co/api/planets/?page=${paginationPlanets}`)//max(page=7)  пошук(&search=r2) 
            .then((response) => response.json())
            .then(({ results }) => {
                this.setState({
                    Plenets: results,
                    isLoading: false
                })
            })
    }
    getStarWarsSpecies = () => {
        this.setState({
            isLoading: true
        })
        let { paginationSpecies } = this.state;
        fetch(`https://swapi.co/api/species/?page=${paginationSpecies}`)//max(page=7)  пошук(&search=r2) 
            .then((response) => response.json())
            .then(({ results }) => {
                this.setState({
                    Species: results,
                    isLoading: false
                })
            })
    }
    getStarWarsStarships = () => {
        this.setState({
            isLoading: true
        })
        let { paginationStarship } = this.state;
        fetch(`https://swapi.co/api/starships/?page=${paginationStarship}`)//max(page=7)  пошук(&search=r2) 
            .then((response) => response.json())
            .then(({ results }) => {
                this.setState({
                    Starship: results,
                    isLoading: false
                })
            })
    }
    getStarWarsVehicles = () => {
        this.setState({
            isLoading: true
        })
        let { paginationStarship } = this.state;
        fetch(`https://swapi.co/api/vehicles/?page=${paginationStarship}`)//max(page=7)  пошук(&search=r2) 
            .then((response) => response.json())
            .then(({ results }) => {
                this.setState({
                    Vehicle: results,
                    isLoading: false
                })
            })
    }

    //Lococ components
    toggleJustified = tab => e => {
        if (this.state.activeItemJustified !== tab) {
            this.setState({
                activeItemJustified: tab
            });
        }
    };
    //Lococ components

    DetalsFilm = id => {
        this.props.history.push(`/starwars/films/${id}`)
    }

    onHendelNambers = id => {
        this.setState({
            paginationPeople: String(id)
        })
    }

    render() {
        const { isLoading, films, People, Plenets, Species, Starship, Vehicle } = this.state;
        return (
            <main className='bagraundbody'>
                {isLoading ? (<img src={Spinner} alt="loder" width="100%" height="650" />) : (
                    <div className="container-fluid">
                        <h1 className='colorcard' style={{ textAlign: "center" }}>StarWars</h1>
                        <MDBContainer>
                            <div className="input-group mb-3 d-flex offset-3" style={{ width: '500px' }}>
                                <div className="input-group-prepend" >
                                    <button className="btn btn-primary" type="button" id="button-addon1"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                            <MDBNav tabs className="nav-justified" color='indigo'>
                                <MDBNavItem>
                                    <MDBNavLink className='colornav' to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
                                        Films
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='colornav' to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
                                        People
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='colornav' to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
                                        Plenet
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='colornav' to="#" active={this.state.activeItemJustified === "4"} onClick={this.toggleJustified("4")} role="tab" >
                                        Species
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='colornav' to="#" active={this.state.activeItemJustified === "5"} onClick={this.toggleJustified("5")} role="tab" >
                                        Starships
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='colornav' to="#" active={this.state.activeItemJustified === "6"} onClick={this.toggleJustified("6")} role="tab" >
                                        Vehicles
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNav>
                            <MDBTabContent
                                activeItem={this.state.activeItemJustified}
                            >
                                <MDBTabPane tabId="1" role="tabpanel">
                                    {films.length ? (
                                        <Fragment>
                                            <h1 className='colorcard' style={{ textAlign: "center" }}>StarWars Films</h1>
                                            <Cards films={films} DetalsFilm={this.DetalsFilm} />
                                        </Fragment>) : (null)}
                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    {films.length ? (
                                        <Fragment>
                                            <div className='container'>
                                                <h1 className='colorcard' style={{ textAlign: "center" }}>StarWars Peoples</h1>
                                                <PaginatPeople onHendelNambers={this.onHendelNambers} />
                                                <Piople People={People} />
                                            </div>
                                        </Fragment>) : (null)}
                                </MDBTabPane>
                                <MDBTabPane tabId="3" role="tabpanel">
                                    {Plenets.length ? (<Fragment>
                                        <div className="container">
                                            <h1 className='colorcard' style={{ textAlign: "center" }}>StarWars Plenets</h1>
                                            <PaginationPlenet />
                                            <Plenet Plenet={Plenets} />
                                        </div>
                                    </Fragment>)
                                        : (null)}
                                </MDBTabPane>
                                <MDBTabPane tabId="4" role="tabpanel">
                                    {Species.length ? (<Fragment>
                                        <div className="container">
                                            <h1 className='colorcard' style={{ textAlign: "center" }}>StarWars Species</h1>
                                            <PaginationSpecies />
                                            <Speciess Species={Species} />
                                        </div>
                                    </Fragment>)
                                        : (null)}
                                </MDBTabPane>
                                <MDBTabPane tabId="5" role="tabpanel">
                                    {Starship.length ? (<Fragment>
                                        <div className="container">
                                            <h1 className='colorcard' style={{ textAlign: "center" }}>StarWars Starship</h1>
                                            <PaginationStarships />
                                            <Starships Starship={Starship} />
                                        </div>
                                    </Fragment>)
                                        : (null)}
                                </MDBTabPane>
                                <MDBTabPane tabId="6" role="tabpanel">
                                    {Vehicle.length ? (<Fragment>
                                        <div className="container">
                                            <h1 className='colorcard' style={{ textAlign: "center" }}>StarWars Vehicle</h1>
                                            <PaginationVehicles />
                                            <Vehicles Vehicle={Vehicle} />
                                        </div>
                                    </Fragment>)
                                        : (null)}
                                </MDBTabPane>
                            </MDBTabContent>
                        </MDBContainer>
                    </div>
                )}
            </main>
        )
    }
}

export default StarWars;
