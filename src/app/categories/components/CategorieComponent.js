import React from 'react';

function CategorieComponent(props) {
      const categories = props.documents.map((document => document.category));
    return (
        <table className="table table-hover">
            <thead>
            <tr>

                <th>Category</th>

            </tr>
            </thead>
            <tbody>
            {categories.filter((document,index) => categories.indexOf(document) === index).map((categorie, index) => (
                 <tr key={index}>
                     <td>{categorie}</td>
                </tr>
            ))}



            </tbody>
        </table>
    )
}

export default CategorieComponent;