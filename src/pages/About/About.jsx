import HeroImg from "@/assets/images/hero.jpg";
import Codexcoders from "@/assets/images/codexcodersblue.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Innovator, Developer, Engineer,
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Arivazhagan, 
                🎯 I'm a passionate Full-Stack Developer with 2+ years in MERN and DevOps.
🤖 1+ year hands-on experience building AI/ML solutions using Python, TensorFlow, and CNNs.
🚀 Built 10+ real-world projects including an AI-powered agri platform with 90%+ accuracy.
🛠️ I love working on scalable systems, CI/CD pipelines, and solving real-world problems..{" "}
                <span className="font-bold text-white">
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Arivazhagan B, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-10  w-fit"
                        src={Codexcoders}
                        alt="Olova Logo"
                        height="30"
                        width="auto"
                      />
                      <span className="text-white">Codexcoders</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
