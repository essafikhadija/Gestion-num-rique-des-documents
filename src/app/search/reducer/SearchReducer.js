import Types from '../../ActionsTypesConstants';

const INITIAL_STATE = {
          nameToSearch: ''
   };

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.UPDATE_DOCUMENT_NAME_FOR_SEARCH: {
            const nameToSearch = action.value;
            return {...state, nameToSearch};
        }

        case Types.POST_DOCUMENT_NAME_TO_SEARCH: {
            return {...state, nameToSearch: action.value};
        }

        case Types.POST_DOCUMENT_NAME_TO_SEARCH_SUCCESS: {
            return INITIAL_STATE;
        }

        default:
            return state;
    }
};

export default SearchReducer;