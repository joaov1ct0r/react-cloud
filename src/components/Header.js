function Header() {
    return (
        <header>
            <h2>Cloud</h2>
            <h2>Computing</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                elit mi, fringilla ac congue sed, imperdiet sed enim. Quisque
                luctus eget ex ut commodo. Nullam non velit sodales.
            </p>
            <button type="submit">About us</button>

            <div className="img-container">
                <img
                    src={require('./assets/images/cloud.jpg')}
                    alt="cloud system"
                />
            </div>
        </header>
    );
}

export default Header;
