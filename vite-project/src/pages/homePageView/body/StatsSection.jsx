import { useEffect, useState, useRef } from "react";

export default function StatsSection() {
  const stats = [
    { icon: "🛡️", value: 15, label: "Years of Experience in Medical Billing" },
    { icon: "❤️", value: 99, label: "Clean Claim Ratio" },
    { icon: "📅", value: 30, label: "Revenue Increase" },
    { icon: "🏆", value: 97, label: "First Pass Ratio" },
    { icon: "🔄", value: 15, label: "Reduce Denial Rate" },
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;

          stats.forEach((stat, index) => {
            setTimeout(() => {
              let count = 0;
              const step = Math.ceil(stat.value / 20); // Speed of increment

              const interval = setInterval(() => {
                count += step;
                if (count >= stat.value) {
                  count = stat.value;
                  clearInterval(interval);
                }
                setAnimatedStats((prev) => {
                  const newStats = [...prev];
                  newStats[index] = count;
                  return newStats;
                });
              }, 50);
            }, index * 200);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-4">
    <div ref={sectionRef} className="bg-[#09243C] text-white py-16 px-6 rounded-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
          >
            <span className="text-3xl">{stat.icon}</span>
            <h3 className="text-3xl font-bold text-[#09A8D4]">
              {animatedStats[index]}+
            </h3>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
