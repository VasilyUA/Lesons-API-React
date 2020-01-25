import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="section footer-classNameic context-dark bg-image" style={{ background: '#2d3246',height:'30px' }}>
                <div className="container text-center footer-end">
                    <big style={{ color:'#fff'}}>Copyright &copy; Your Website</big>
                </div>
            </footer>
        )
    }
}

export default Footer
