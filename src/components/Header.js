function Header() {
    return (
        <header>
            <div className="h2-container"></div>
            <h2>Cloud</h2>
            <h2>Computing</h2>

            <div className="img-container">
                <img
                    src={require('../assets/images/cloud.jpg')}
                    alt="cloud system"
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                elit mi, fringilla ac congue sed, imperdiet sed enim. Quisque
                luctus eget ex ut commodo. Nullam non velit sodales.
            </p>
            <button type="submit">About us</button>
        </header>
    );
}

export default Header;
