import React, { Component } from 'react';

//Components
import Curs from './Curs'

//CSS
import './PrivatbankAPI.css'

//Loder
import Spinner from '../Loder/Double Ring-1.9s-200px.svg';

export class PrivatbankAPI extends Component {
    constructor() {
        super();
        this.state = {
            curs: [],
            isLoadingCurs: false
        }
    }
    componentDidMount() {
        this.getCurs();
    }

    getCurs = () => {
        this.setState({
            isLoadingCurs: true
        })
        let URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
        fetch(URL)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    curs: response,
                    isLoadingCurs: false
                })
            })
    }

    render() {
        const { curs, isLoadingCurs } = this.state;
        return (
            <main>
                {isLoadingCurs ? ( <p className="fig"><img src={Spinner} alt="loder" /></p>):(<div className="container">
                        <h1 style={{ textAlign: 'center', fontSize: '3em' }}>Curs</h1>
                        <div className="row">
                            <div className='col-4 '>
                                <img src="https://i2.wp.com/itc.ua/wp-content/uploads/2019/09/PrivatBank.jpg?w=200&quality=80&strip=all&ssl=1" alt="privat" />
                            </div>
                            <div className='offset-4 col-4'>
                                {curs.map(({ ccy, base_ccy, buy, sale }) => (
                                    <Curs key={buy} ccy={ccy} base_ccy={base_ccy} buy={buy} sale={sale} />
                                ))}
                            </div>
                        </div>
                    </div>)}
                <div className="container-fluid">
                    <hr />
                    <div className="container" style={{ marginTop: '5%', marginBottom: '5%' }}>
                        <div className="row">
                            <div className="col-4"><h1>Банкомати</h1></div>
                            <div className="offset-4 col-4"><h1>Термінали</h1></div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default PrivatbankAPI
