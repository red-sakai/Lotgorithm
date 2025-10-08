import Button from "../ui/Button";
import { FaStream, FaLayerGroup } from "react-icons/fa";

export default function SimulationSection() {
  return (
    <section className="py-16 bg-blue-50" id="simulation">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Simulate Queue & Stack</h2>
      <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center animate-fade-in">
        <p className="mb-6 text-gray-700 text-lg text-center">
          Choose a data structure to start simulating operations.
        </p>
        <div className="flex gap-6 justify-center">
          <Button href="/queue" size="md" icon={<FaStream />}>
            Queue Simulator
          </Button>
          <Button href="/stack" size="md" icon={<FaLayerGroup />}>
            Stack Simulator
          </Button>
        </div>
      </div>
    </section>
  );
}
