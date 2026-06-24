import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react'
import { data } from '../data/index.js'
import styles from './Contact.module.css'

const links = [
  { icon: Mail, label: 'Email', value: data.email, href: `mailto:${data.email}` },
  { icon: Github, label: 'GitHub', value: 'TanishxDev', href: data.links.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'tanish29', href: data.links.linkedin },
  { icon: ExternalLink, label: 'LeetCode', value: 'tanishxdev', href: data.links.leetcode },
  { icon: ExternalLink, label: 'Portfolio', value: 'tanishxdev-site.vercel.app', href: data.links.portfolio },
]

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span>Contact</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Let's work<br />together</h2>
            <p className={styles.body}>
              Open to backend engineering roles, full-stack positions, AI product work, and open source collaborations.
              If you're building something interesting — reach out.
            </p>
            <a href={`mailto:${data.email}`} className={styles.mainCta}>
              Send an email <ArrowRight size={15} />
            </a>
          </div>

          <div className={styles.right}>
            {links.map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className={styles.linkRow}>
                <div className={styles.linkIcon}>
                  <l.icon size={15} />
                </div>
                <div className={styles.linkInfo}>
                  <span className={styles.linkLabel}>{l.label}</span>
                  <span className={styles.linkValue}>{l.value}</span>
                </div>
                <ArrowRight size={13} className={styles.arrow} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
