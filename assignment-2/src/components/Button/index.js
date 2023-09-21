import React from 'react'
import clxs from 'clsx'
import styles from './Button.module.css'

function Button({ label, primary, danger, warn, link, small, large , onClick}) {

    const classes = clxs(styles.btn, {
        [styles.primary]: primary,
        [styles.warn]: warn,
        [styles.danger]: danger,
        [styles.link]: link,
        [styles.small]: small,
        [styles.large]: large
    })

    return <button
        className={classes} onClick={onClick}
    >
        {label}
    </button>
}

export default Button