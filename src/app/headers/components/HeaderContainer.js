import React from "react";
import HeaderComponent from "./HeaderComponent";
import {connect} from "react-redux";
import Actions from "../../search/actions/SearchActions";

class HeaderContainer extends React.Component {
    render() {
        return (

            <HeaderComponent
                nameToSearch={this.props.nameToSearch}
                changeFieldSearchedDocument = {this.props.changeFieldSearchedDocuments}
                requestSearchedDocuments = {this.props.requestSearchedDocuments}
            />
        );
    }
 }
const mapStateToProps = (state) => {
    const {nameToSearch} = state.SearchReducer;

    return {
        nameToSearch
    };
};

const mapDispatchToProps = {
    requestSearchedDocuments : Actions.requestSearchedDocuments,
    changeFieldSearchedDocuments: Actions.changeFieldSearchedDocument
};
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
