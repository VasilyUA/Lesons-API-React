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
            //Lococ components
            activeItemJustified: "1",
            //Lococ components
        }
    }


    componentDidMount() {
        this.getStarWarsFilms();
        this.getStarWarsPiople();
        // this.getStarWarsPlanets();
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
        const { films, isLoading, People, Plenets } = this.state;
        console.log(Plenets)
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
                                        Test
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
                                                <PaginatPeople onHendelNambers={this.onHendelNambers} />
                                                <Piople People={People} />
                                            </div>
                                        </Fragment>) : (null)}
                                </MDBTabPane>
                                <MDBTabPane tabId="3" role="tabpanel">
                                    {Plenets.length ? (<Fragment>
                                        <div className="container">
                                            <Plenet />
                                        </div>
                                    </Fragment>) : (null)}

                                </MDBTabPane>
                                <MDBTabPane tabId="4" role="tabpanel">
                                    <p className="mt-2">
                                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                                        they sold out mcsweeney's organic lomo retro fanny pack
                                        lo-fi farm-to-table readymade. Messenger bag gentrify
                                        pitchfork tattooed craft beer, iphone skateboard locavore
                                        carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                                        banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                                        Williamsburg banh mi whatever gluten-free, carles pitchfork
                                        biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
                                        you probably haven't heard of them, vinyl craft beer blog
                                        stumptown. Pitchfork sustainable tofu synth chambray yr.
                                    </p>
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
