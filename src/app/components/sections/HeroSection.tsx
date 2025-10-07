import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="py-16 text-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold mb-4">Data Structures & Algorithms Simulator</h1>
      <p className="text-lg mb-6 text-gray-700">
        Visualize and interact with Queue and Stack operations. Learn by doing!
      </p>
      <Button href="#simulation">Try Simulation</Button>
    </section>
  );
}
