import Types from '../../ActionsTypesConstants';

const INITIAL_STATE = {
    isLoading: false,
    documents: []
};

const HomeReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.REQUEST_DOCUMENTS: {
            return {
                ...state,
                documents: [],
                isLoading: true
            }
        }
        case Types.RECEIVE_DOCUMENTS: {
            const {documents} = action;
            return {
                ...state,
                documents,
                isLoading: false

            }
        }
        case Types.DELETE_DOCUMENT_SUCCESS: {
            const documents = [...state.documents];

            let index = documents.findIndex((document) => document._id === action.id);
            documents.splice(index, 1);

            return {
                ...state,
                documents
            }
        }
        case Types.DELETE_DOCUMENT_FAILURE: {
            console.log("error of delete");
        }
        case Types.REQUEST_DOCUMENT_DETAILS: {
            return {
                ...state,
                documents: []
            }
        }
        default:
            return state;
    }
};

export default HomeReducer;