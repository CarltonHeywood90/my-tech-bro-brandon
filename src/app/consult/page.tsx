import styles from './consult.module.css';

export default function ConsultPage() {
  return (
    <main className={styles.container}>
      <div className={styles.columns}>
        <section>
          <h1>Let&apos;s <span className={styles.accent}>Build</span></h1>
          <p className={styles.intro}>
            Whether you need a physical infrastructure overhaul or an AI agent deployment,
            the first step is a conversation. Tell us about your current stack, and
            we&apos;ll tell you how to harden it.
          </p>
          <ul className={styles.benefits}>
            <li>✓ Comprehensive Network Audits</li>
            <li>✓ Custom Agentic AI Strategy</li>
            <li>✓ Hardware &amp; Cabling Consultation</li>
            <li>✓ Security &amp; Performance Optimization</li>
          </ul>
        </section>

        <section className={styles.formCard}>
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Carlton Heywood" />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Acme Corp" />
            </div>
            <div className={styles.field}>
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" defaultValue="Structured Cabling">
                <option>Structured Cabling</option>
                <option>Agentic AI Integration</option>
                <option>Network Security Audit</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="brief">Project Brief</label>
              <textarea id="brief" name="brief" rows={4} placeholder="Describe your current bottleneck..." />
            </div>
            <button className={styles.submitButton} type="button">
              Submit Request
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
