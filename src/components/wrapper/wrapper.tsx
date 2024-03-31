import styles from './wrapper.module.css'
// @ts-ignore

export const Wrapper = ({children, renderBadge = () => <div>'Loading'</div>  }) => {
return <div className={styles.wrapper}>
    <h2> Wrapper</h2>
    {children} - {renderBadge()}
</div>
}