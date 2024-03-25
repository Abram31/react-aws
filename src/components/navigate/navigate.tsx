import styles from "./navigate.module.scss"

export const Navigate = () => {
    return (
        <nav className={styles.nav}>
            <a href='/first'>first - link</a>
            <a href='/second'>second - link</a>
        </nav>
    )
}