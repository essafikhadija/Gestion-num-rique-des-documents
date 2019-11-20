import Types from '../../ActionsTypesConstants';


function requestCategoriesData() {
    return async (dispatch) => {
        dispatch({
            type: Types.REQUEST_DOCUMENTS_CATEGORIES

        });
        try {
            const result = await fetch("/api/v1/documents").then(response => response.json());
            dispatch({
                type: Types.RECEIVE_DOCUMENTS_CATEGORIES,
                documents: result
            });
        } catch (err) {
            dispatch({
                type: Types.FETCH_DOCUMENTS_FAILURE,
                error: err
            });
        }
    };
}

export default {
    requestCategoriesData
}