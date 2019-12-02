import React from 'react';
import {NavLink} from 'react-router-dom'

function HeaderComponent(props) {
		return (

				<nav className="form navbar navbar-expand-lg navbar-light bg-light">
						<ul className="navbar-nav mr-auto nav-menu-app">
								<li className="nav-item">
										<NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
								</li>
							{/*	<li className="nav-item">
										<NavLink className="nav-link" to="/categories" activeClassName="active">Categories</NavLink>
								</li>
								<li className="nav-item">
										<NavLink className="nav-link" to="/years" activeClassName="active">Years</NavLink>
								</li>
								<li className="nav-item">
										<NavLink className="nav-link" to="/search" activeClassName="active">Search</NavLink>
								</li>*/}

                <li className="nav-item">
                    <NavLink className="nav-link" to="/add-document" activeClassName="active">New</NavLink>
                </li>
						</ul>
						<form className="form-inline my-2 my-lg-0" onSubmit={(ev) => {
                ev.preventDefault();
                if(props.nameToSearch){
                    props.requestSearchedDocuments(props.nameToSearch);
                }

            }}>
								<input className="form-control mr-sm-2"
                       name="search"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"
                       onChange={(ev) => props.changeFieldSearchedDocument('nameToSearch', ev.target.value)}
                />
								<button className="btn btn-outline-success my-2 my-sm-0"  type="submit">
                   Search
								</button>
						</form>
				</nav>

		)
}


export default HeaderComponent;