import {connect} from 'react-redux';
import React, {Component} from "react";
import CategorieComponent from "./CategorieComponent";
import Actions from '../actions/CategorieActions';

class CategoriesContainer extends Component {
    render() {
        return (
            <div>
                <h1>Categories</h1>
                <CategorieComponent documents={this.props.documents}/>
             </div>
        );
    }

		componentDidMount() {
        this.props.requestCategoriesData();
		}
}

const mapStateToProps = (state) => {
    const {documents} = state.CategorieReducer;
    return {
        documents
    }
};

const mapDispatchToProps = {
    requestCategoriesData : Actions.requestCategoriesData
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);