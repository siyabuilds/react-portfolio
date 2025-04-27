import { useState, useEffect } from "react";

export default function PulseLayer() {
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPulse = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setPulses((prevPulses) => [...prevPulses, newPulse]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (pulses.length > 0) {
      const timer = setTimeout(() => {
        setPulses((prev) => prev.slice(1));
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [pulses]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {pulses.map((pulse) => (
        <span
          key={pulse.id}
          className="absolute w-5 h-5 rounded-full bg-[var(--primary)] opacity-70 animate-pulseEffect"
          style={{
            left: pulse.x - 20 + "px",
            top: pulse.y - 20 + "px",
          }}
        />
      ))}
    </div>
  );
}
