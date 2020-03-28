import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Event from './container/Event';
import Running from './container/Running';
import Cycling from './container/Cycling';
import Walking from './container/Walking';
import Header from 'components/Header/index.jsx';
import {Main} from './styled';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Main>
                    <Switch>
                        <Route path="/" exact component={Event} />
                        <Route path="/running" exact component={Running} />
                        <Route path="/cycling" exact component={Cycling} />
                        <Route path="/walking" exact component={Walking} />
                    </Switch>
                </Main>
            </BrowserRouter>
        </div>
    );
}

export default App;
