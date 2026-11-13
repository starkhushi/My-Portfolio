import IconCloud from "./ui/icon-cloud";

const slugs = [
  "python",
  "tensorflow",
  "pytorch",
  "keras",
  "opencv",
  "scikitlearn",
  "pandas",
  "numpy",
  "langchain",
  "huggingface",
  "flask",
  "fastapi",
  "streamlit",
  "mongodb",
  "postgresql",
  "mysql",
  "sqlite",
  "docker",
  "git",
  "github",
  "jupyter",
  "googlecolab",
  "kaggle",
  "tableau",
  "googleanalytics",
  "linux",
  "mlflow",
  "twilio",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
