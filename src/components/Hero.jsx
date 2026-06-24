import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { data } from '../data/index.js'
import styles from './Hero.module.css'

const roles = ['Backend Engineer', 'AI Systems Builder', 'Full Stack Developer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for opportunities
        </div>

        <h1 className={styles.name}>Tanish Kumar</h1>

        <div className={styles.roleWrap}>
          <span className={styles.role}>{displayed}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </div>

        <p className={styles.tagline}>{data.tagline}</p>

        <div className={styles.statsRow}>
          {data.stats.map(s => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View projects</a>
          <a href={`mailto:${data.email}`} className={styles.btnSecondary}>
            <Mail size={14} />
            Get in touch
          </a>
        </div>

        <div className={styles.socials}>
          <a href={data.links.github} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={data.links.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={data.links.leetcode} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LeetCode">
            <ExternalLink size={18} />
          </a>
          <a href={data.links.portfolio} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Portfolio">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  )
}
