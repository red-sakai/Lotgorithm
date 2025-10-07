import Card from "../ui/Card";

const features = [
  {
    title: "Queue Simulation",
    description: "Enqueue, dequeue, and visualize queue operations step-by-step.",
  },
  {
    title: "Stack Simulation",
    description: "Push, pop, and peek with interactive stack visualization.",
  },
  {
    title: "Educational",
    description: "Learn core concepts with guided explanations and examples.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-white" id="features">
      <h2 className="text-2xl font-semibold text-center mb-8">Features</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}
