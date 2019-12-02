import React, {Component} from 'react';
import '../css/App.css';
import {Switch , Route} from 'react-router-dom'
import HomeContainer from "./home/components/HomeContainer"
import SearchContainer from "./search/components/SearchContainer";
import CategoriesContainer from "./categories/components/CategoriesContainer";
import DetailContainer from "./detail/components/DetailContainer";
import YearsContainer from "./years/components/YearsContainer";
import HeaderContainer from "./headers/components/HeaderContainer";
import AddDocumentContainerRF from "./add-document/components/redux-form/addDocumentContainerRF";
import UpdateDocumentContainer from "./update-document/components/updateDocumentContainer"
import {history} from "../store/store";
import {ConnectedRouter} from 'connected-react-router'


class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <HeaderContainer/>
                    <div className="container-fluid text-center">
                        <div className="row content">
                            <div className="col-sm-8 text-left" id="container-app">
                                <Switch>
                                    <Route name='home' exact path='/' component={HomeContainer}/>
                                    <Route path='/search' component={SearchContainer}/>
                                    <Route path='/categories' component={CategoriesContainer}/>
                                    <Route path='/years' component={YearsContainer}/>
                                    <Route path='/add-document' component={AddDocumentContainerRF}/>
                                    <Route path='/detail/:id' component={DetailContainer}/>
                                    <Route path='/update-document/:id' component={UpdateDocumentContainer}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}

export default App;
