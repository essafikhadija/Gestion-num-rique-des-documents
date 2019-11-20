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
        urlFile: ''

    },
    file: null
};

const addDocumentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.UPDATE_FIELD_DOCUMENT_FOR_ADD: {
            const document = {...state.document, [action.key]: action.value};
            return {...state, document};
        }
        case Types.UPDATE_FILE_DOCUMENT_FOR_ADD: {
            return {...state, file: action.value};
        }
        case Types.POST_DOCUMENT: {
            return {...state, file: action.value};
        }
        case Types.VALIDATE_DOCUMENT_FAILURE : {
            const doc = {...action.documentFile};
            return {...state, document: doc};

        }
        case Types.POST_DOCUMENT_SUCCESS: {
            return INITIAL_STATE;
        }
        case Types.POST_DOCUMENT_FAILURE: {
            return {...state, error: true};
        }
        default:
            return state;
    }
};

export default addDocumentReducer;