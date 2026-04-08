import { useEffect, useRef, useState } from "react";
import "./HomeStats.scss";

const stats = [
  {
    target: 8.0,
    prefix: "$",
    suffix: " Billion",
    decimals: 1,
    label: "Portfolio Value",
  },
  {
    target: 4.5,
    suffix: " Million",
    decimals: 1,
    label: "Sq. Ft. of Portfolio",
  },
  {
    target: 2.0,
    suffix: " Million",
    decimals: 1,
    label: "Sq. Ft. in Development",
  },
];

export default function HomeStats() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      setCounts(stats.map(() => 0));
      return;
    }

    const duration = 1700;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((item) => item.target * easeOut));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView]);

  const formatValue = (value, item) => {
    const rounded = value.toFixed(item.decimals);
    return `${item.prefix || ""}${rounded}${item.suffix || ""}`;
  };

  return (
    <section
      className="home-stats section-container"
      aria-label="Company highlights"
      ref={sectionRef}
    >
      <div className="stats-grid">
        {stats.map((item, index) => (
          <article className="stat-item" key={item.label}>
            <h3 className="global-title">{formatValue(counts[index], item)}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
