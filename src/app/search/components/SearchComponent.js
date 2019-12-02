import React from 'react';
import {NavLink} from "react-router-dom";
import Moment  from "react-moment";
function SearchComponent(props) {

    if (props.isLoading) {
        return <p className="loading">Loading...</p>
    }
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>display</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
            </thead>
            <tbody>
            {props.documents.map((document, index) => (
                <tr key={index}>
                    <td>{document.name}</td>
                    <td>{document.category}</td>
                    <td> <Moment format="DD/MM/YYYY" withTitle>{document.date}</Moment> </td>
                    <td><NavLink className="nav-link"
                                 to={'/detail/' + document._id}> <p>display</p></NavLink></td>
                    <td>

                        <NavLink className="nav-link glyphicon glyphicon-download-alt"
                                 to={'/update-document/' + document._id}> modify</NavLink>
                    </td>
                    <td>
                        <a target="_blank">
                            <button onClick={() => props.deleteDocument(document._id)} type="button"
                                    className="btn btn-default" aria-label="Left Align">
                                <span className="glyphicon glyphicon-download-alt">delete</span>
                            </button>
                        </a>
                    </td>

                </tr>
            ))}

            </tbody>
        </table>
    )
}

export default SearchComponent;