import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

import logo from '../assets/logo.jpg';

const Header = () => {
    const router = useRouter();

    const checkActive = (path) => {
        if (path === router.pathname) return true;
        return false;
    };

    return (
        <header className="header">
            <div className="header__body">
                <div className="header__logo">
                    <img src={logo} />
                </div>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <Link href={'/'}>
                                <a
                                    className={cn({
                                        navbar__link: true,
                                        active: checkActive('/'),
                                    })}>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link href={'/about'}>
                                <a
                                    className={cn({
                                        navbar__link: true,
                                        active: checkActive('/about'),
                                    })}>
                                    About us
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
