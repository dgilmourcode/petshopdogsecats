import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PromoSlide {
  title: string;
  description: string;
  image: string;
  discount: number;
  code?: string;
  link?: string;
}

interface PromoBannerProps {
  items: PromoSlide[];
  interval?: number;
}

export default function PromoBanner({
  items,
  interval = 5000,
}: PromoBannerProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setCurrentIdx((idx + items.length) % items.length);
  };

  const prev = () => goTo(currentIdx - 1);

  useEffect(() => {
    if (items.length <= 1 || paused) return;
    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % items.length);
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, interval, items.length]);

  if (!items.length) return null;

  const slide = items[currentIdx];

  return (
    <div
      className="relative overflow-hidden rounded-sm bg-gray-900 min-h-[200px] sm:min-h-[240px] group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900/65 to-transparent z-10" />
        <img
          src={slide.image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-20 h-full min-h-[200px] sm:min-h-[240px] flex items-center px-6 sm:px-10 md:px-14">
        <div className="w-full flex items-center justify-between gap-4 sm:gap-8">
          <div className="flex-1 text-left max-w-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Oferta Especial
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              {slide.title}
            </h3>
            <p className="text-sm sm:text-base text-white/60 mt-1.5 leading-relaxed">
              {slide.description}
            </p>
            {slide.link && (
              <Link
                to={slide.link}
                className="mt-4 inline-flex items-center gap-1.5 px-5 h-10 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
              >
                Aproveitar
                <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="hidden sm:block text-right shrink-0">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400 block leading-none drop-shadow-lg">
              -{slide.discount}%
            </span>
            {slide.code && (
              <span className="text-xs text-white/50 border border-white/10 bg-white/5 px-2 py-1 inline-block mt-2 font-mono rounded">
                {slide.code}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="absolute z-20 bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={prev}
          className="w-7 h-7 bg-white/10 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => goTo(currentIdx + 1)}
          className="w-7 h-7 bg-white/10 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="absolute z-20 bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === currentIdx ? "w-5 bg-amber-400" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
