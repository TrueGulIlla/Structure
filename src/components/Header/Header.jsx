import s from './header.module.css'
import burgerIcon from '../../../public/img/burgericon.svg'
const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${s.header__container} container`}>
                <nav className={s.header__navbar}>
                    <ul className={s.header__list}>
                        <li className={s.header__item}>Главная</li>
                        <li className={s.header__item}>Оклейка автомобилей</li>
                        <li className={s.header__item}>Детейлинг автомобилей</li>
                        <li className={s.header__item}>Галерея робот</li>
                    </ul>
                </nav>
                <div className={s.header__burger}>
                    <img src={burgerIcon} alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;