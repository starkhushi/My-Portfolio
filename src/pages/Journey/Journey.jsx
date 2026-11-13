import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  FlaskConical,
  Trophy,
  GitPullRequest,
  BarChart3,
  ExternalLink,
} from "lucide-react";

const categories = {
  education: {
    label: "Education",
    icon: GraduationCap,
    text: "text-sky-300",
    chip: "bg-sky-500/10 border-sky-500/30 text-sky-300",
    dot: "bg-sky-400",
  },
  work: {
    label: "Work",
    icon: Briefcase,
    text: "text-teal-300",
    chip: "bg-teal-500/10 border-teal-500/30 text-teal-300",
    dot: "bg-teal-400",
  },
  research: {
    label: "Research & Projects",
    icon: FlaskConical,
    text: "text-violet-300",
    chip: "bg-violet-500/10 border-violet-500/30 text-violet-300",
    dot: "bg-violet-400",
  },
  award: {
    label: "Awards",
    icon: Trophy,
    text: "text-amber-300",
    chip: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    dot: "bg-amber-400",
  },
  kaggle: {
    label: "Kaggle",
    icon: BarChart3,
    text: "text-cyan-300",
    chip: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    dot: "bg-cyan-400",
  },
  opensource: {
    label: "Open Source",
    icon: GitPullRequest,
    text: "text-emerald-300",
    chip: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    dot: "bg-emerald-400",
  },
};

// Oldest first. Each year is rendered as its own chapter.
const journey = [
  {
    year: "2022",
    chapter: "Where it started",
    items: [
      {
        category: "education",
        date: "Sep 2022",
        title: "Started B.Tech at KIET Group of Institutions",
        place: "Computer Science (AI & ML)",
        text: "Began my engineering degree and wrote my first lines of Python. Machine learning quickly went from a subject to the thing I spent my evenings on.",
      },
    ],
  },
  {
    year: "2024",
    chapter: "Hackathons, patents and first research",
    items: [
      {
        category: "award",
        date: "Apr 2024",
        title: "Top 5 Performer and Quiz Winner",
        place: "MLSA MIET Hackathon",
        text: "My first real hackathon results, and the point where I started building things under a deadline.",
      },
      {
        category: "award",
        date: "Sep 2024",
        title: "IdeaSurge 2024, Consolation Winner",
        place: "Sharda University",
      },
      {
        category: "award",
        date: "Oct 2024",
        title: "InnoTech 2024, Department Winner and Institute Runner-Up",
        place: "KIET Group of Institutions",
      },
      {
        category: "award",
        date: "Nov 2024",
        title: "Top 5 Finalist, Smart India Hackathon 2024",
        place: "Government of India",
        text: "Reached the national finals of India's largest hackathon.",
      },
      {
        category: "research",
        date: "Nov 2024 – Jan 2025",
        title: "Malware Classification research",
        place: "CNN ensembles on malware images",
        text: "Reached 99.45% on Malimg, 98.72% on Malevis and 97.86% on the blended set by reworking ResNet50, EfficientNet and DenseNet with batch normalization, focal loss, L2 regularization and Leaky ReLU, a 3-5% gain across datasets.",
        tags: ["TensorFlow/Keras", "ResNet50", "EfficientNet", "DenseNet"],
        link: "https://github.com/starkhushi/Malware-Classification",
      },
      {
        category: "research",
        date: "Dec 2024",
        title: "Filed 2 patents",
        place: "Signify and Early Forest Fire Prediction",
        text: "Signify translates Indian Sign Language gestures to text and speech in real time. Early Forest Fire Prediction pairs IoT sensors with ML models to flag fires before satellite systems can.",
        tags: ["LSTM", "OpenCV", "IoT", "Sensors"],
        link: "https://github.com/starkhushi/Signify",
      },
    ],
  },
  {
    year: "2025",
    chapter: "From internships to a full-time role",
    items: [
      {
        category: "work",
        date: "Jan 2025 – Mar 2025",
        title: "AIML Intern",
        place: "Zipbolt Innovation Labs",
        text: "Detected anomalies in EV sensor data with RPCA and Isolation Forest, and wired Power BI dashboards into a Django backend for live analytics.",
        tags: ["Isolation Forest", "RPCA", "Power BI", "Django"],
      },
      {
        category: "work",
        date: "Mar 2025 – Jul 2025",
        title: "AIML Intern",
        place: "Epsilon Creative Agency",
        text: "Built a real-time image-to-avatar swapping pipeline with face detection, segmentation and Stable Diffusion, tuned for low latency.",
        tags: ["Stable Diffusion", "Segmentation", "Real-time"],
      },
      {
        category: "work",
        date: "Jul 2025 – Aug 2025",
        title: "AIML Intern",
        place: "soFueled",
        text: "Architected a real-time computer vision system for granular object analysis with YOLOv8 and OpenCV, plus a hybrid watershed and convexity-defect method to count densely occluded objects.",
        tags: ["YOLOv8", "OpenCV", "Watershed"],
      },
      {
        category: "research",
        date: "Sep 2025",
        title: "Intelligent Multi-Agent Medical Appointment Scheduler",
        place: "LangChain + LangGraph",
        text: "A multi-agent system that manages patient data, books Google Calendar slots with conflict detection and sends reminders through Twilio and SendGrid.",
        tags: ["LangGraph", "Streamlit", "SQLAlchemy", "Twilio"],
        link: "https://github.com/starkhushi/Raga_AI_Task",
      },
      {
        category: "award",
        date: "Sep 2025",
        title: "Best AI Learner Award (2023–24)",
        place: "KIET Group of Institutions",
      },
      {
        category: "work",
        date: "Sep 2025 – Dec 2025",
        title: "AI Trainee",
        place: "DheeYantra",
        text: "Worked on the Text-to-Speech module of a multilingual chatbot: integrating speech synthesis into the conversation flow and exploring fine-tuning for natural, low-latency voices.",
        tags: ["TTS", "Speech synthesis", "Fine-tuning"],
      },
      {
        category: "work",
        date: "Nov 2025 – Present",
        title: "Junior AIML Engineer",
        place: "Radius Synergies International Pvt. Ltd.",
        text: "My first full-time role. I benchmark streaming TTS models (Qwen3-TTS, Higgs TTS, YourVoic, ElevenLabs) on latency, accuracy and emotion control with a real-time VAD pipeline, built a multi-agent Tally chatbot on Gemma-4-31B that turns plain-language questions into Tally XML, and model transformer health for the DTHT project.",
        tags: ["TTS", "VAD", "Gemma 4", "Multi-agent", "MongoDB"],
        current: true,
      },
    ],
  },
  {
    year: "2026",
    chapter: "Graduating, competing and contributing",
    items: [
      {
        category: "education",
        date: "Aug 2026",
        title: "Graduated, Bachelor of Technology",
        place: "KIET Group of Institutions · GPA 8.2/10",
        text: "Finished four years of AI & ML coursework alongside internships, hackathons and a full-time job. Also earned the AWS Academy Graduate certification in Generative AI Foundations along the way.",
      },
      {
        category: "kaggle",
        date: "2026",
        title: "Kaggle Expert",
        place: "kaggle.com/starkhushi",
        text: "Competing across very different problems: tabular playground series, grammar scoring from speech, molecule identification from mass spectra, LLM authorship detection and combinatorial optimisation.",
        tags: ["LightGBM", "WavLM", "Whisper", "LoRA", "Ensembling"],
        link: "https://www.kaggle.com/starkhushi",
      },
      {
        category: "opensource",
        date: "Nov 2026",
        title: "First merged open-source pull requests",
        place: "matchms and MLflow",
        text: "Five pull requests merged into matchms (mass spectrometry in Python), including a SIRIUS export style and a collection-level MGF importer, and a dataset digest fix merged into MLflow. Several more MLflow bugs I reported were fixed upstream.",
        tags: ["Python", "matchms", "MLflow", "Code review"],
        link: "https://github.com/matchms/matchms/pulls?q=is%3Apr+author%3Astarkhushi+is%3Amerged",
        current: true,
      },
    ],
  },
];

const stats = [
  { value: "5", label: "AI/ML roles" },
  { value: "2", label: "Patents filed" },
  { value: "6", label: "Merged open-source PRs" },
  { value: "Expert", label: "Kaggle tier" },
];

function TimelineItem({ item, index }) {
  const cat = categories[item.category];
  const Icon = cat.icon;
  const left = index % 2 === 0;

  return (
    <li className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16">
      {/* Node on the spine */}
      <span
        className={`absolute left-[9px] md:left-1/2 md:-translate-x-1/2 top-6 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-[#04081A] ${cat.dot}`}
        aria-hidden="true"
      >
        {item.current && (
          <span
            className={`absolute h-4 w-4 rounded-full ${cat.dot} animate-ping opacity-60`}
          />
        )}
      </span>

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`group relative rounded-2xl border border-gray-800 bg-gray-900/70 p-5 sm:p-6 backdrop-blur transition-colors duration-300 hover:border-gray-600 ${
          left ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${cat.chip}`}
          >
            <Icon className="h-3.5 w-3.5" />
            {cat.label}
          </span>
          <span className="font-mono text-xs text-gray-400">{item.date}</span>
          {item.current && (
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white">
              Now
            </span>
          )}
        </div>

        <h4 className="text-lg sm:text-xl font-semibold text-white leading-snug">
          {item.title}
        </h4>
        <p className={`mt-1 text-sm font-medium ${cat.text}`}>{item.place}</p>

        {item.text && (
          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-gray-300">
            {item.text}
          </p>
        )}

        {item.tags && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-gray-700 bg-black/30 px-2 py-0.5 text-xs text-gray-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${cat.text} hover:underline`}
          >
            See it <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </motion.article>
    </li>
  );
}

export default function Journey() {
  const [filter, setFilter] = useState("all");
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const chapters = useMemo(
    () =>
      journey
        .map((chapter) => ({
          ...chapter,
          items:
            filter === "all"
              ? chapter.items
              : chapter.items.filter((item) => item.category === filter),
        }))
        .filter((chapter) => chapter.items.length > 0),
    [filter]
  );

  let runningIndex = 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04081A] pt-28 pb-24 text-white md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-10 left-10 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-sm text-teal-300">2022 → today</p>
          <h1 className="mt-3 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            My Journey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 md:text-lg">
            From a first-year student at KIET to a Junior AIML Engineer, Kaggle
            Expert and open-source contributor. Every stop along the way, in
            order.
          </p>
        </motion.header>

        {/* Stats */}
        <dl className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-5 text-center"
            >
              <dd className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs text-gray-400 sm:text-sm">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* Filters */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter the timeline"
        >
          {[["all", { label: "Everything" }], ...Object.entries(categories)].map(
            ([key, cat]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  filter === key
                    ? "border-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-gray-950"
                    : "border-gray-700 bg-gray-900/60 text-gray-300 hover:border-gray-500 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            )
          )}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-16">
          {/* Spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-800 md:left-1/2" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-teal-400 via-blue-500 to-violet-500 md:left-1/2"
          />

          {chapters.map((chapter) => (
            <section key={chapter.year} className="relative pb-6">
              <div className="relative mb-8 flex items-center pl-12 md:justify-center md:pl-0">
                <div className="relative z-10 rounded-full border border-gray-700 bg-[#04081A] px-5 py-2 text-center">
                  <h2 className="text-2xl font-bold text-white">
                    {chapter.year}
                  </h2>
                </div>
                <p className="ml-4 text-sm text-gray-400 md:absolute md:left-[calc(50%+4.5rem)] md:ml-0">
                  {chapter.chapter}
                </p>
              </div>

              <ol className="space-y-8 md:space-y-4">
                {chapter.items.map((item) => (
                  <TimelineItem
                    key={`${item.date}-${item.title}`}
                    item={item}
                    index={runningIndex++}
                  />
                ))}
              </ol>
            </section>
          ))}

          {/* What's next */}
          <div className="relative flex pl-12 pt-6 md:justify-center md:pl-0">
            <div className="relative z-10 rounded-2xl border border-dashed border-gray-600 bg-[#04081A] px-6 py-4 text-center">
              <p className="text-sm font-medium text-white">What comes next</p>
              <p className="mt-1 max-w-sm text-sm text-gray-400">
                Speech and LLM systems that hold up in production, more
                competitions, and more open-source work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
