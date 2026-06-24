import { Briefcase, Circle } from 'lucide-react'
import { data } from '../data/index.js'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span>Experience</span>
        </div>

        <h2 className={styles.heading}>Where I've worked</h2>

        <div className={styles.timeline}>
          {data.experience.map((exp, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.timelineLeft}>
                <div className={styles.dot}>
                  <Briefcase size={13} />
                </div>
                <div className={styles.line} />
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.meta}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.sep}>·</span>
                      <span className={styles.type}>{exp.type}</span>
                    </div>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                <div className={styles.techRow}>
                  {exp.tech.map(t => (
                    <span className={styles.techChip} key={t}>{t}</span>
                  ))}
                </div>

                <ul className={styles.points}>
                  {exp.points.map((pt, j) => (
                    <li className={styles.point} key={j}>
                      <Circle size={4} className={styles.bullet} fill="currentColor" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
