import { data } from '../data/index.js'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span>Tech Stack</span>
        </div>

        <h2 className={styles.heading}>What I build with</h2>

        <div className={styles.grid}>
          {data.stack.map(group => (
            <div className={styles.group} key={group.label}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.items}>
                {group.items.map(item => (
                  <span className={styles.chip} key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
