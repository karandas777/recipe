import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <div className="min-height py-4">
                <div className="display-4 text-center sty-font">
                    {this.props.match.params.name}
                </div>
            </div>
        )
    }
}
