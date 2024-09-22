import React from 'react';
import s from './carMusc.module.css'
import decoration from '../../../public/img/eeeeeeeaaaa.svg'

const CarMusc = () => {
    return (
        <section className={s.carMusc}>
            <div className={`${s.carMusc__container} container`}>
                <h1 className={s.carMusc__title}>CAR MUSC</h1>
                <img className={s.carMusc__decor} src={decoration} alt=""/>
                <h2 className={s.carMusc__text}>Lorem ipsum dolor sit amet,
                    consectetur <br/>adipiscing elit. Vitae orci urna amet penatibus.</h2>
                <div className={s.carMusc__button}>
                    <button>Наши услуги</button>
                </div>
            </div>
        </section>
    );
};

export default CarMusc;