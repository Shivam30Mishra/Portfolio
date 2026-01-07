import Container from "../components/Container";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="pt-40">
      {/* HERO */}
      <section>
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              text-[56px] md:text-[64px]
              font-semibold
              leading-[1.05]
              tracking-[-0.02em]
            "
          >
            Full Stack <br /> Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="
              mt-6
              max-w-xl
              text-[16px]
              text-[var(--text-muted)]
            "
          >
            I build clean, scalable web applications using the MERN stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="#projects"
              className="
                px-6 py-2
                text-sm font-medium
                bg-[var(--text)]
                text-[var(--bg)]
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6 py-2
                text-sm font-medium
                border border-[var(--border)]
              "
            >
              Contact
            </a>
          </motion.div>
        </Container>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-44">
        <Container>
          <h2 className="text-2xl font-semibold mb-12 tracking-tight">
            Selected Projects
          </h2>

          <ProjectsGrid />
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-44 pb-40">
        <Container>
          <h2 className="text-2xl font-semibold mb-10 tracking-tight">
            Get in touch
          </h2>

          <form className="max-w-md space-y-4">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email" />
            <textarea className="input h-28" placeholder="Message" />
            <button className="px-6 py-2 bg-[var(--text)] text-[var(--bg)] text-sm">
              Send
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}

/* ---------- Projects Grid ---------- */
function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProjectCard
        title="Project Title"
        desc="Short description of the project. Explain what problem it solves and what you built."
        stack="React · Node · MongoDB"
      />
      <ProjectCard
        title="Project Title"
        desc="Short description of the project. Explain what problem it solves and what you built."
        stack="React · Express · MongoDB"
      />
    </div>
  );
}

/* ---------- Project Card ---------- */
function ProjectCard({ title, desc, stack }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        group
        border border-[var(--border)]
        p-6
        bg-[var(--card)]
      "
    >
      <h3 className="text-lg font-medium tracking-tight">
        {title}
      </h3>

      <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
        {desc}
      </p>

      <p className="mt-4 text-xs text-[var(--text-muted)]">
        {stack}
      </p>
    </motion.div>
  );
}
