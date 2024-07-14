import FeatureIcon from "@/assets/icons/Feature-Icon.svg";

const features = [
  {
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure data encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

function Features() {
  return (
    <div className="text-white bg-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl font-bold tracking-tighter text-center sm:text-6xl">
          Everything you need
        </h2>
        <div className="flex justify-center">
          <p className="mt-5 text-xl text-center text-white/70 max-w-[540px]">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-16 sm:flex-row">
          {features.map(({ title, description }, index) => (
            <div
              key={index}
              className="px-5 py-10 text-center border rounded-lg border-white/20"
            >
              <div className="inline-flex h-14 w-14">
                <FeatureIcon />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
