import React from 'react';
import {NavLink} from "react-router-dom";

function DetailComponent(props) {

    if (!props.document) {
        return <p className="loading">Loading...</p>
    }
    return (

        <div>
            <div className="smart-popin">
                <div className="sp-table">
                    <div className="sp-cell">
                        <div className="sp-body">
                            <h1>Detail name: {props.document.name}</h1>
                            <h2>Detail id: {props.document._id}</h2>
                            <h2>Detail urlFile : {props.document.urlFile}</h2>
                            <embed src={window.location.origin + props.document.urlFile.replace('public', '')}
                                   width="800" height="500"
                                   type="application/pdf"></embed>

                            <NavLink to='/' className="sp-close" activeClassName="active">×</NavLink>
                        </div>
                        <a href="" className="sp-back"></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailComponent;