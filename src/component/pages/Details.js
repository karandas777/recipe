import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        const {label} = this.props.details;
        return (
            <div className="min-height py-5">
                <div className="display-4 text-center text-danger sty-font">
                    {label}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    details:state.recipe.recipeDetails
})

export default connect(mapStateToProps)(Details);