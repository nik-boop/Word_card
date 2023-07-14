import {Component} from 'react'
import React from 'react';
import cn from 'classnames';

import styles from './style/style.module.scss';
import menu from './img/menu.svg'

export class Header extends React.Component {
    render() {
        return (
            <div className={cn(styles.flex_row, 'header')}>
                <div className={styles.flex_row__cell}>
                    <img src={menu} alt="alt text" className={styles.image}/>
                </div>
                <div className={styles.flex_row__cell1}>
                    <h1 className={styles.title}>Site Name</h1>
                </div>
            </div>
        )
    }
}
