
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <section className={`${styles.section} ${styles.hero}`}>
            {/* Hero content goes here */}
          </section>
          <section className={`${styles.section} ${styles.gradient_purple}`}>
            {/* Gradient purple content goes here */}
          </section>
          <section className={`${styles.section} ${styles.gradient_blue}`}>
            {/* Gradient blue content goes here */}
          </section>
        </div>
        <div className={styles.image_container}>
          <img 
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" 
            alt="Main home image" className={styles.img}/>
        </div>
      </div>
    </main>
  )
}
