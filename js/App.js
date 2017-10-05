import React, { Component } from 'react';
import MainStackRouter from './Routers/MainStackRouter';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MainStackRouter />;
    }
}

export default App;
