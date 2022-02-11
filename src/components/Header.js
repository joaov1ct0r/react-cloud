import H2Container from './H2Container';

function Header() {
    return (
        <header>
            <H2Container></H2Container>
            <div className="about">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris elit mi, fringilla ac congue sed, imperdiet sed enim.
                    Quisque luctus eget ex ut commodo. Nullam non velit sodales.
                </p>
                <button type="submit">About us</button>
            </div>
        </header>
    );
}

export default Header;
