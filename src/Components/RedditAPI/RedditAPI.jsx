import React, { Component } from 'react';
import { MDBContainer, MDBRow, } from 'mdbreact';

//Components 
import Item from './Item'

export class RedditAPI extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoading: false,
            enableAutoRefresh: false,
            minComments: 0
        }
    }
    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        this.setState({
            isLoading: true
        })
        const url = 'https://www.reddit.com/r/reactjs.json?limit=100';
        fetch(url)
            .then(res => res.json())
            .then(({ data }) => {
                this.setState({
                    items: data.children,
                    isLoading: false
                })

            })
    }

    updateAutoRefresh = () => {
        this.setState(state => ({
            enableAutoRefresh: !state.enableAutoRefresh
        }), () => {
            if (this.state.enableAutoRefresh) {
                this.AutoRefresh = setInterval(this.getItems, 3000);
            } else {
                clearInterval(this.AutoRefresh)
            }
        })
    }

    updateMinComments = e => {
        this.setState({
            minComments: Number(e.target.value)
        })
    }

    getitemsSortByComments = (items, minComments) => items
        .filter(item => item.data.num_comments >= minComments)
        .sort((a, b) => b.data.num_comments - a.data.num_comments);



    render() {
        console.log(this.state.items)
        const { items, isLoading, enableAutoRefresh, minComments } = this.state;
        const itemsSortByComments = this.getitemsSortByComments(items, minComments);
        return (
            <main>
                <MDBContainer style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <h1 style={{ textAlign: 'center' }}>Top Commented</h1>
                    <button type='button' className="btn btn-success" onClick={this.updateAutoRefresh}>
                        {enableAutoRefresh ? 'Stop' : 'Start'}AutoRefresh
                    </button>
                    <br />
                    <div>
                        <p>Comments:{minComments}</p>
                        <input type="range" onChange={this.updateMinComments} value={minComments} min={0} max={500} style={{ width: '400px' }} />
                    </div>
                    <MDBRow>
                        {isLoading ? (<p>...Loading</p>) :
                            itemsSortByComments.length > 0 ? (itemsSortByComments.map((item) => (
                                <Item key={item.data.id} data={item.data} />
                            ))) : (
                                    <p>No results</p>
                                )
                        }
                    </MDBRow>
                </MDBContainer>
            </main>
        )
    }
}

export default RedditAPI;
