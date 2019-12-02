import Types from '../../ActionsTypesConstants';
import {push} from 'connected-react-router'

function showDocumentToUpdate(id) {
    return async (dispatch) => {

        dispatch({
            type: Types.REQUEST_DOCUMENT_TO_UPDATE
        });

        //  try {
        const result = await fetch("/api/v1/documents/" + id,
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }

        ).then(response => response.json());

        if(result.date){result.date=new Date(result.date.split("T")[0]);}
        if(result.expiredDate){result.expiredDate=new Date(result.expiredDate.split("T")[0])    }

        dispatch({
            type: Types.RECEIVE_DOCUMENT_TO_UPDATE_SUCCESS,
            document: result})

        /*} catch (err) {
            console.log(" ------- "+ err);
            dispatch({
                type: Types.RECEIVE_DETAILS_DOCUMENT_FAILURE,
                error: err
            });
        }*/
    };
}
function putDocument(id,document,file) {
    return async (dispatch) => {
        dispatch({
            type: Types.UPDATE_DOCUMENT
        });
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('document', JSON.stringify(document));
            const result = await fetch("/api/v1/documents/"+id,
                {
                    method: 'PUT',
                    body: formData
                }
            ).then(response => response.json());

            dispatch({
                type: Types.UPDATE_DOCUMENT_SUCCESS,
                document: result
            });
            dispatch(push('/'));

        } catch (err) {
            dispatch({
                type: Types.UPDATE_DOCUMENT_FAILURE,
                error: err
            });
        }
    };
}

function changeFieldDocument(key, value) {
    return (dispatch) => {
        dispatch({
            type: Types.UPDATE_FIELD_DOCUMENT,
            key: key,
            value: value
        });
    }
}

function changeFileDocument(value) {
    return (dispatch) => {
        dispatch({
            type: Types.UPDATE_FILE_DOCUMENT,
            value: value
        });
    }
}


export default {
    showDocumentToUpdate,
    putDocument,
    changeFieldDocument,
    changeFileDocument
}