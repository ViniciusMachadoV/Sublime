import styles from './NossaHistoria.module.css'

function NossaHistoria(){
    return(
        <section className={styles.nossaHistoriaContainer}>
            
            <div className={styles.nossaHistoriaText}>
            <strong className={styles.nossaHistoriaTitle}> Nossa História </strong>
            <spam className={styles.nossaHistoriaContent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam impedit tenetur magni dicta! Consectetur quaerat sunt soluta, placeat perferendis veniam eveniet eligendi reprehenderit officiis repellendus. Ut temporibus voluptate voluptatum nisi.</spam>
            </div>
            
            <div className={styles.nossaHistoriaImages}>
                <img
                className={styles.nossaHistoriaVerticalPic}
                src='../../assets/nossahistoriaverticalpic.jpg'
                alt='nixo de madeira com varias fitas de tecido.'
                />
                <img
                className={styles.nossaHistoriaHorizontalPic}
                src='../../assets/nossahistoriahorizontalpic.jpg'
                alt='paletós em uma arara.'
                />
            </div>
        </section>
    );
}

export default NossaHistoria