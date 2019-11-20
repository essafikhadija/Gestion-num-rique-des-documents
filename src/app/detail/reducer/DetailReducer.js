import Types from '../../ActionsTypesConstants';

const INITIAL_STATE = {
    documents: {urlFile: ''}
};


const DetailReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case Types.REQUEST_DOCUMENT_DETAILS: {
            return INITIAL_STATE;
        }
        case Types.RECEIVE_DETAILS_DOCUMENT_SUCCESS: {
            const {document} = action;
            return {
                ...state,
                document
            }
        }

        case Types.RECEIVE_DETAILS_DOCUMENT_FAILURE: {
            console.log(" Erreur de récupération de détails");
        }

        default:
            return state;
    }
};

export default DetailReducer;