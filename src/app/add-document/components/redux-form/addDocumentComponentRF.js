import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Field, reduxForm} from 'redux-form';
import Renders from "./addDocumentFiledsRenders";
import Validators from "./addDocumentFiledsValidators";


function AddDocumentComponentRF(props) {
    const {valid,pristine} = props;

    return (

        <form className="form" onSubmit={(ev) => {
            ev.preventDefault();
            props.postDocument(props.document, props.file);
        }
        }>
            <Field type="text"
                   component={Renders.renderField}
                   label="Name"
                   classCss="form-control"
                   name="name"
                   value={props.document.name}
                   onChange={(ev) => props.changeFieldDocument('name', ev.target.value)}
                   id="name-document-input"
                   placeholder="Enter name"
                   validate={[Validators.required, Validators.nameLength]}/>

            <Field type="text"
                   classCss="form-control"
                   name="category"
                   component={Renders.renderField}
                   label="Category"
                   value={props.document.category}
                   onChange={(ev) => props.changeFieldDocument('category', ev.target.value)}
                   id="category-document-input"
                   placeholder="Enter Category"
                   validate={[Validators.categoryLength]}/>

            <Field
                type="textarea"
                checked={props.document.description}
                classCss="form-control"
                name="description"
                component={Renders.renderFieldTextarea}
                label="Description"
                onChange={(ev) => props.changeFieldDocument('description', ev.target.value)}
                className="form-control col-md-10"
                id="description-document-input"/>

                <div className="form-group row MuiTableCell-root">
                    <label className="label">Document</label>
                    <div className="input-group col-md-10 element-without-padding">
                        <div className="custom-file">
                            <input type="file"
                                   onChange={(ev) => {
                                       props.changeFileDocument(ev.target.files[0]);
                                   }}
                                   className="custom-file-input"
                                   id="document-input" required/>
                            <label className="custom-file-label" htmlFor="inputGroupFile02">
                                {props.file ? props.file.name : 'Choose file'}
                            </label>
                        </div>
                    </div>
                </div>

            <Field
                checked={props.document.expiredDocument}
                type="checkbox"
                classCss="form-check-input col-md-2 col-form-label"
                name="expiredDocument"
                component={Renders.renderField}
                label="Expired document"
                onChange={(ev) => props.changeFieldDocument('expiredDocument', ev.target.checked)}
                id="expired-document-input"
            />

            <Field
                name="date"
                component={Renders.datePicker}
                type="Date"
                label="Date"
                classCss="form-control"
                selected={props.document.date}
                onChange={(val) => props.changeFieldDocument('date', val)}
                className="form-control col-md-10"
                id="date-document-input"
                validate={[Validators.validateDate]}
            />

            <Field
                name="expiredDate"
                disabled={!props.document.expiredDocument}
                component={Renders.datePicker}
                type="text"
                label="Expired Date"
                classCss="form-control"
                selected={props.document.expiredDate}
                onChange={(val) => props.changeFieldDocument('expiredDate', val)}
                className="form-control col-md-10"
                id="expired-date-document-input"
                validate={!props.document.expiredDocument?undefined:[Validators.validateExpiredDate]}

            />

            <button type="submit" className="btn btn-primary" style={{float: "right"}}
                    disabled={pristine || !valid}>Submit
            </button>

        </form>
    )
}

export default reduxForm({
    form: 'simple',
})(AddDocumentComponentRF);