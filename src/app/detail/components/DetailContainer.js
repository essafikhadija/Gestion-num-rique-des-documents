import {connect} from 'react-redux';
import React, {Component} from "react";
import DetailComponent from './DetailComponent';
import Actions from "../../detail/actions/DetailActions";


class DetailContainer extends Component {
    render() {
        return (
            <DetailComponent
                document={this.props.document}>Detail</DetailComponent>
        );
    }

    componentDidMount() {
        this.props.showDetailsDocument(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    const {document} = state.DetailReducer;
    return {
        document
    }
};

const mapDispatchToProps = {
    showDetailsDocument: Actions.showDocument
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);