import Types from '../../ActionsTypesConstants';

const INITIAL_STATE = {
    document: {

        name: '',
        date: new Date(),
        category: '',
        description: '',
        file: '',
        expiredDocument: false,
        expiredDate: null,
        urlFile:''
    },
    file: null
};

const updateDocumentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.REQUEST_DOCUMENT_TO_UPDATE:{
            return INITIAL_STATE
        }
        case Types.RECEIVE_DOCUMENT_TO_UPDATE_SUCCESS:{
            const {document} = action;

            return {
                ...state,
                document
            }
        }
        case Types.UPDATE_FIELD_DOCUMENT: {
            const document = {...state.document, [action.key]: action.value};
            return {...state, document};
        }
        case Types.UPDATE_FILE_DOCUMENT: {
            return {...state, file: action.value};
        }
        case Types.UPDATE_DOCUMENT: {

            return {...state, file: action.value};
        }
        case Types.UPDATE_DOCUMENT_SUCCESS: {
            return INITIAL_STATE;

        }
        case Types.UPDATE_DOCUMENT_FAILURE: {
            //console.log("POST_DOCUMENT_FAILURE");
            return {...state, error: true};
        }
        default:
            return state;
    }
};

export default updateDocumentReducer;