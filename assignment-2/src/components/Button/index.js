import React from 'react'
import clxs from 'clsx'
import styles from './Button.module.css'

function Button({type, label, primary, danger, warn, link, small, large , onClick}) {

    const classes = clxs(styles.btn, {
        [styles.primary]: primary,
        [styles.warn]: warn,
        [styles.danger]: danger,
        [styles.link]: link,
        [styles.small]: small,
        [styles.large]: large
    })

    return <button
        className={classes} onClick={onClick} type={type}
    >
        {label}
    </button>
}

export default Button