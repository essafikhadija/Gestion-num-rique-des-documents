import Types from '../../ActionsTypesConstants';

const INITIAL_STATE = {

    documents: []
};

const CategorieReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.REQUEST_DOCUMENTS_CATEGORIES: {
            return {
                ...state,
                documents: []
            }
        }
        case Types.RECEIVE_DOCUMENTS_CATEGORIES: {
            const {documents} = action;
            return {
                ...state,
                documents
            }
        }

        default:
            return state;
    }
};

export default CategorieReducer;