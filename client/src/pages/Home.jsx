import Container from "../components/Container";

export default function Home() {
  return (
    <main className="pt-32">
      {/* HERO SECTION */}
      <section>
        <Container>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Full Stack <br /> Developer
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl text-base">
            I build clean, scalable web applications using the MERN stack.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-white text-black text-sm font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-2 border border-[#1f1f1f] text-sm font-medium hover:border-gray-400 transition"
            >
              Contact
            </a>
          </div>
        </Container>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="mt-40">
        <Container>
          <h2 className="text-3xl font-semibold mb-12 tracking-tight">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111111] border border-[#1f1f1f] p-6 hover:border-gray-500 transition">
              <h3 className="text-xl font-medium tracking-tight">
                Project Title
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                Short description of the project goes here. Explain
                what problem it solves and what you built.
              </p>

              <div className="mt-4 text-xs text-gray-500">
                React · Node.js · MongoDB
              </div>
            </div>

            <div className="bg-[#111111] border border-[#1f1f1f] p-6 hover:border-gray-500 transition">
              <h3 className="text-xl font-medium tracking-tight">
                Project Title
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                Short description of the project goes here. Explain
                what problem it solves and what you built.
              </p>

              <div className="mt-4 text-xs text-gray-500">
                React · Express · MongoDB
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mt-40 pb-40">
        <Container>
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">
            Get in touch
          </h2>

          <form className="max-w-md space-y-4">
            <input
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] p-3 text-sm focus:outline-none focus:border-gray-400 transition"
              placeholder="Name"
            />
            <input
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] p-3 text-sm focus:outline-none focus:border-gray-400 transition"
              placeholder="Email"
            />
            <textarea
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] p-3 text-sm focus:outline-none focus:border-gray-400 transition"
              placeholder="Message"
              rows="4"
            />

            <button
              type="submit"
              className="px-6 py-2 bg-white text-black text-sm font-medium"
            >
              Send Message
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
}
