import './App.css';

import Nav from './components/Nav';

import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <div className="img-container"></div>

            <img
                src={require('./assets/images/cloud.jpg')}
                alt="cloud system"
            />
        </div>
    );
}

export default App;
