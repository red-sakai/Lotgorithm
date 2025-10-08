import Card from "../../components/ui/Card";
import { FaStream, FaLayerGroup, FaBookOpen } from "react-icons/fa";

const features = [
  {
    title: "Queue Simulation",
    description: "Enqueue, dequeue, and visualize queue operations step-by-step.",
    icon: <FaStream className="text-blue-600 text-3xl mb-2" />,
  },
  {
    title: "Stack Simulation",
    description: "Push, pop, and peek with interactive stack visualization.",
    icon: <FaLayerGroup className="text-purple-600 text-3xl mb-2" />,
  },
  {
    title: "Educational",
    description: "Learn core concepts with guided explanations and examples.",
    icon: <FaBookOpen className="text-green-600 text-3xl mb-2" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="features">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
