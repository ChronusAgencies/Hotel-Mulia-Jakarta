import React, {FC, HTMLProps} from 'react';
import Image from 'next/image';
import Button from '@/components/buttons/generalBtn/button';
import logo from '@/public/mulia_logo.png';
import banner from '@/public/hotel-mulia-senayan-jakarta.jpeg';
import style from '@/styles/landing.module.scss';

const index: FC<HTMLProps<HTMLAnchorElement>> = () => (
  <>
    <div className={style.background__container}></div>
    <div className={style.background__overlay}></div>
    <div className={style.landing__container}>
      <Button
        href="/"
        className={style.logo__container}
      >
        <Image
          src={logo}
          width={108}
          height={67}
          alt="mulia-logo"
          className={style.logo}
        />
      </Button>
      <h1 className={style.main__header}>
        HOTEL MULIA SENAYAN & THE SUITES AT HOTEL MULIA SENAYAN, JAKARTA
      </h1>
      <article className={style.sec__header__container}>
        <h2>Place to stay</h2>
        <h2>like no <span>other</span></h2>
      </article>
      <article className={style.paragraf__container}>
        <p className={style.paragraf}>
          Strategycallly Located at The FInest Location in Jakarta                  
        </p>
      </article>
      <Button
        href={'/home'}
        className={style.landing__cta}
      >
        <div className={style.cta}>
          <p>Explore</p>
        </div>
      </Button>
    </div>
  </>
)

export default index