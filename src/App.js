import './App.css';

import Nav from './components/Nav';

import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <div className="img-container">
                <img
                    src={require('./assets/images/cloud.jpg')}
                    alt="cloud system"
                />
            </div>
        </div>
    );
}

export default App;
