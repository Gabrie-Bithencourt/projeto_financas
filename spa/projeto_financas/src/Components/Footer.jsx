import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div id={styles.container_footer}>
            <div id={styles.footer} className="container d-flex justify-content-center align-items-center">
                <span className="text-light">Direitos reservados &copy; moneyratenews.com</span>
            </div>
        </div>
    )
}

export default Footer;