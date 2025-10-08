import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 flex flex-col items-center justify-center text-center min-h-[60vh] overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/60 to-blue-300/30 z-0" />
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-white drop-shadow mb-6">
          Data Structures & Algorithms Simulator
        </h1>
        <p className="text-xl text-blue-100 mb-8 font-medium drop-shadow">
          Visualize and interact with Queue and Stack operations. Learn by doing!
        </p>
        <Button href="#simulation" size="lg" icon="play">
          Try Simulation
        </Button>
      </div>
    </section>
  );
}
