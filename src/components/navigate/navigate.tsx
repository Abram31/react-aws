import styles from "./navigate.module.scss"
import {Breadcrumbs, Link, Typography} from "@mui/material";

export const Navigate = () => {
    return (
        <Breadcrumbs className={styles.nav}>
            <Link className={styles.link} href='/first'  underline="hover" color="inherit">
                First
            </Link>
            <Link className={styles.link} href='/second'
                  underline="hover"
                  color="inherit"
            >
                Second
            </Link>
            <Link className={styles.link} href='/render'
                  underline="hover"
                  color="inherit"
            >
                Render
            </Link>
        </Breadcrumbs>
    )
}