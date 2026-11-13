import HeroImg from "@/assets/images/hero.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Engineer, Researcher, Competitor, Contributor
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Left side image */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="AI & ML Illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="relative space-y-4">
              {/* Intro paragraph */}
              <p className="text-gray-300">
                Hello! I’m <span className="font-semibold text-white">Khushi</span>, 
                a Junior AIML Engineer at Radius Synergies International and a 
                2026 B.Tech graduate of KIET Group of Institutions. My work today 
                is speech and LLM systems: benchmarking streaming TTS models, 
                and building multi-agent chatbots that turn plain language into 
                structured queries. Outside work I compete on Kaggle as a 
                Kaggle Expert and contribute to open-source Python libraries 
                such as matchms and MLflow.
              </p>

              {/* Highlighted block */}
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I got here through four internships, a string of hackathons 
                    including the Smart India Hackathon 2024 finals, two patent 
                    filings (Signify and Early Forest Fire Prediction) and 
                    research on malware classification with CNNs that reached 
                    99.45% on Malimg. I like problems where a model has to 
                    work for real people, in real time.
                  </p>

                  <div className="mt-6 space-y-1">
                    <cite className="block font-medium text-white">
                      Khushi 
                    </cite>
                    <span className="text-gray-400 text-sm">
                      Junior AIML Engineer
                    </span>
                  </div>
                </blockquote>
              </div>

              <Link
                to="/journey"
                className="inline-flex items-center gap-2 pt-4 font-medium text-teal-300 hover:underline"
              >
                Read my full journey, 2022 to today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
