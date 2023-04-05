function Footer() {
    return (
        <footer className='footer indigo lighten-5'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Eugene Petukhov
                </div>
            </div>
        </footer>
    );
}

export { Footer };
