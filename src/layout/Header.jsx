import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <nav className='indigo'>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo'>
                        React Recipe
                    </Link>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <a href='https://github.com/EvgeniQwerty/react-recipe'>
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export { Header };
