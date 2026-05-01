import { useEffect, useRef } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.classList.contains("reveal")
      ? [root, ...root.querySelectorAll(".reveal")]
      : root.querySelectorAll(".reveal");

    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("active");
            obs.unobserve(e.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    targets.forEach((t) => obs.observe(t));

    return () => obs.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/** Animated count-up to a target number once visible. */
export function useCountUp(
  target,
  { duration = 1800, decimals = 0 } = {}
) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let started = false;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;

            const start = performance.now();

            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              const v = target * eased;

              el.textContent = decimals
                ? v.toFixed(decimals)
                : Math.round(v).toLocaleString("en-IN");

              if (p < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent = decimals
                  ? Number(target).toFixed(decimals)
                  : Number(target).toLocaleString("en-IN");
              }
            };

            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [target, duration, decimals]);

  return ref;
}