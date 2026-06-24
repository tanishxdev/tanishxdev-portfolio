import { MapPin, GraduationCap, Trophy } from 'lucide-react'
import { data } from '../data/index.js'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span>About</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Building things<br />that actually work</h2>
            <p className={styles.body}>{data.about}</p>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <GraduationCap size={16} className={styles.cardIcon} />
                <span className={styles.cardTitle}>Education</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.edu_degree}>{data.education.degree}</p>
                <p className={styles.edu_school}>{data.education.school}</p>
                <div className={styles.edu_meta}>
                  <span className={styles.tag}>
                    <MapPin size={11} />
                    {data.education.location}
                  </span>
                  <span className={styles.tag}>{data.education.period}</span>
                </div>
                <p className={styles.edu_note}>{data.education.note}</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Trophy size={16} className={styles.cardIcon} />
                <span className={styles.cardTitle}>Highlights</span>
              </div>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>Top 1.2%</span>
                  <span className={styles.highlightDesc}>AlgoUniversity Accelerator (Y Combinator-backed) — selected from 100K+ applicants</span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.highlightValue}>295+ solved</span>
                  <span className={styles.highlightDesc}>LeetCode problems · Contest Rating 1404</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
