import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Field, reduxForm} from 'redux-form';
import Renders from "./updateDocumentFiledsRenders";
import Validators from "./updateDocumentFiledsValidators";


function UpdateDocumentComponent(props) {
    const {valid} = props;


    return (
        <form className="form" onSubmit={(ev) => {
            ev.preventDefault();
            ev= ev || window.event; //Get the event if it's not passed in.
            if (!valid) { //Do your validation here.
                ev.returnValue = false;
                return false;
            }else {
                props.putDocument(props.id, props.document, props.file);

            }
        }}>
            <Field type="text"
                   touched="true"
                   valueField={props.document.name}
                   component={Renders.renderField}
                   label="Name"
                   classCss="form-control"
                   name="name"
                   onChange={(ev) => props.changeFieldDocument('name', ev.target.value)}
                   id="name-document-input"
                   placeholder="Enter name"
                   validate={[Validators.nameLength]}/>


            <Field type="text"
                   valueField={props.document.category}
                   classCss="form-control"
                   name="category"
                   component={Renders.renderField}
                   label="Category"
                   onChange={(ev) => props.changeFieldDocument('category', ev.target.value)}
                   id="category-document-input"
                   placeholder="Enter Category"
                   validate={[Validators.categoryLength]}/>

            <Field
                type="textarea"
                valueField={props.document.description}
                classCss="form-control"
                name="description"
                component={Renders.renderFieldTextarea}
                label="Description"
                onChange={(ev) => props.changeFieldDocument('description', ev.target.value)}
                className="form-control col-md-10"
                id="description-document-input"/>

            <div className="form-group row">
                <label className="label">Document</label>
                <div className="input-group col-md-10 element-without-padding">
                    <div className="custom-file">
                        <input type="file"
                               onChange={(ev) => {
                                   props.changeFileDocument(ev.target.files[0]);
                               }}
                               className="custom-file-input"
                               id="document-input"/>
                        <label className="custom-file-label" htmlFor="inputGroupFile02">
                            {props.file ? props.file.name : props.document ? props.document.urlFile : 'Choose file'}
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
                touched="true"
                type="Date"
                label="Date"
                classCss="form-control"
                selectedValue={props.document.date}
                onChange={val => {
                    props.changeFieldDocument('date', val);
                }}
                className="form-control col-md-10"
                id="date-document-input"
                validate={[Validators.validateDate]}
            />

            <Field
                name="expiredDate"
                valueField={props.document.expiredDate}
                touched="true"
                disabled={!props.document.expiredDocument}
                component={Renders.datePicker}
                type="text"
                label="Expired Date"
                classCss="form-control"
                selectedValue={props.document.expiredDate}
                onChange={(val) => props.changeFieldDocument('expiredDate', val)}
                className="form-control col-md-10"
                id="expired-date-document-input"
                validate={[Validators.validateExpiredDate]}

            />

            <button type="submit" className="btn btn-primary" style={{float: "right", marginRight: 26}}
                    >Submit
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'simple',
    touched: true,


})(UpdateDocumentComponent);