import Types from "../../ActionsTypesConstants";

function showDocument(id) {
    return async (dispatch) => {

        dispatch({
            type: Types.REQUEST_DOCUMENT_DETAILS
        });

        try {
            const result = await fetch("/api/v1/documents/" + id,
                {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                }
            ).then(response => response.json());

            dispatch({
                type: Types.RECEIVE_DETAILS_DOCUMENT_SUCCESS,
                document: result
            })

        } catch (err) {

            dispatch({
                type: Types.RECEIVE_DETAILS_DOCUMENT_FAILURE,
                error: err
            });
        }
    };
}

export default {
    showDocument
}