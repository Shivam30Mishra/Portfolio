import Container from "../components/Container";

export default function Home() {
  return (
    <main className="pt-40">
      {/* ================= HERO ================= */}
      <section>
        <Container>
          <h1
            className="
              text-[56px] md:text-[64px]
              font-semibold
              leading-[1.05]
              tracking-tighter
            "
          >
            Full Stack <br /> Developer
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-[16px]
              text-[var(--text-muted)]
            "
          >
            I build clean, scalable web applications using the MERN stack.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="
                px-6 py-2
                text-sm font-medium tracking-tight
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
                text-sm font-medium tracking-tight
                border border-[var(--border)]
              "
            >
              Contact
            </a>
          </div>
        </Container>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="mt-44">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Selected Projects
          </h2>

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
        </Container>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="mt-44 pb-40">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight mb-10">
            Get in touch
          </h2>

          <form className="max-w-md space-y-4">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email" />
            <textarea
              className="input h-28"
              placeholder="Message"
            />
            <button
              type="submit"
              className="
                px-6 py-2
                text-sm font-medium tracking-tight
                bg-[var(--text)]
                text-[var(--bg)]
              "
            >
              Send
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ title, desc, stack }) {
  return (
    <div
      className="
        border border-[var(--border)]
        bg-[var(--card)]
        p-6
        transition
        hover:-translate-y-1
      "
    >
      <h3 className="text-lg font-medium tracking-tight">
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          text-[var(--text-muted)]
          leading-relaxed
        "
      >
        {desc}
      </p>

      <p className="mt-4 text-xs text-[var(--text-muted)]">
        {stack}
      </p>
    </div>
  );
}
