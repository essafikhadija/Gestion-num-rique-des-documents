import {connect} from 'react-redux';
import React, {Component} from "react";
import Actions from '../../home/actions/HomeActions';
import SearchComponent from "./SearchComponent";

class SearchContainer extends Component {
    render() {
        console.log("search search")
        return (
            <SearchComponent
                documents={this.props.documents}
                isLoading={this.props.isLoading}
                deleteDocument={this.props.deleteOneDocument}
               />
        )
    }

    componentDidMount() {
        this.props.requestDocumentsData();
    }
}

const mapStateToProps = (state) => {
    const {documents, isLoading} = state.HomeReducer;
    return {
        documents,
        isLoading
    }
};

const mapDispatchToProps = {
    requestDocumentsData: Actions.requestDocumentsData,
    deleteOneDocument: Actions.deleteDocument
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);