import Button from "../ui/Button";

export default function SimulationSection() {
  return (
    <section className="py-12 bg-gray-50" id="simulation">
      <h2 className="text-2xl font-semibold text-center mb-6">Simulate Queue & Stack</h2>
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <p className="mb-4 text-gray-700">
          Choose a data structure to start simulating operations.
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="/queue">Queue Simulator</Button>
          <Button href="/stack">Stack Simulator</Button>
        </div>
      </div>
    </section>
  );
}
