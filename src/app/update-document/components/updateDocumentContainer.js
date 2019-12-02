import {connect} from 'react-redux';
import React, {Component} from "react";
import Actions from '../actions/UpdateDocumentActions';
import UpdateDocumentComponent from "./updateDocumentComponent";

class UpdateDocumentContainer extends Component {
    render() {
        debugger;
        return (
            <UpdateDocumentComponent
                document={this.props.document}
                file={this.props.file}
                id={this.props.match.params.id}
                changeFieldDocument={this.props.changeFieldDocument}
                changeFileDocument={this.props.changeFileDocument}
                putDocument={this.props.putADocument}/>
        );
    }
    componentDidMount() {

        this.props.showDocumentForUpdate(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {

    const {document, file} = state.UpdateDocumentReducer;
    return {
        document,
        file
    };
};

const mapDispatchToProps = {
    showDocumentForUpdate : Actions.showDocumentToUpdate,
    putADocument: Actions.putDocument,
    changeFieldDocument: Actions.changeFieldDocument,
    changeFileDocument: Actions.changeFileDocument
};


export default connect(mapStateToProps, mapDispatchToProps)(UpdateDocumentContainer);

