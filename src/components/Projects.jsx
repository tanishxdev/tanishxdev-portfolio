import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { data } from '../data/index.js'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span>Projects</span>
        </div>

        <h2 className={styles.heading}>Things I've built</h2>
        <p className={styles.sub}>Each project starts with a real problem. Here's how I solved it.</p>

        <div className={styles.grid}>
          {data.projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        <OpenSourceCard />
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div>
          <div className={styles.cardTagline}>{p.tagline}</div>
          <h3 className={styles.cardName}>{p.name}</h3>
        </div>
        <div className={styles.cardLinks}>
          <a href={p.live} target="_blank" rel="noreferrer" className={styles.iconBtn} aria-label="Live site">
            <ExternalLink size={15} />
          </a>
          <a href={p.code} target="_blank" rel="noreferrer" className={styles.iconBtn} aria-label="Source code">
            <Github size={15} />
          </a>
        </div>
      </div>

      <div className={styles.problemBox}>
        <span className={styles.problemLabel}>Problem</span>
        <p className={styles.problemText}>{p.problem}</p>
      </div>

      <div className={styles.solutionBox}>
        <span className={styles.solutionLabel}>Solution</span>
        <p className={styles.solutionText}>{p.solution}</p>
      </div>

      <div className={styles.techRow}>
        {p.tech.map(t => (
          <span className={styles.techChip} key={t}>{t}</span>
        ))}
      </div>

      <div className={styles.cardFooter}>
        <a href={p.live} target="_blank" rel="noreferrer" className={styles.liveLink}>
          View live <ArrowRight size={13} />
        </a>
      </div>

      <div className={styles.accentBar} style={{ background: p.accent }} />
    </div>
  )
}

function OpenSourceCard() {
  const os = data.openSource
  return (
    <div className={styles.osCard}>
      <div className={styles.osLeft}>
        <div className={styles.osBadge}>Open Source</div>
        <h3 className={styles.osTitle}>{os.repo} — PR {os.pr}</h3>
        <p className={styles.osSubtitle}><code>{os.title}</code></p>

        <div className={styles.osProblem}>
          <span className={styles.problemLabel}>Problem</span>
          <p className={styles.problemText}>{os.problem}</p>
        </div>
        <div className={styles.osSolution}>
          <span className={styles.solutionLabel}>Solution</span>
          <p className={styles.solutionText}>{os.solution}</p>
        </div>

        <div className={styles.osResult}>{os.result}</div>

        <div className={styles.techRow}>
          {os.tech.map(t => (
            <span className={styles.techChip} key={t}>{t}</span>
          ))}
        </div>

        <a href={os.prUrl} target="_blank" rel="noreferrer" className={styles.osPrLink}>
          <Github size={14} />
          View merged PR
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )
}
