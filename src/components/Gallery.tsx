import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  title?: string
}

interface GalleryProps {
  images: GalleryImage[]
  title?: string
  subtitle?: string
  carousel?: boolean
}

export default function Gallery({ images, title, subtitle, carousel = false }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [lightboxOpen, closeLightbox, goNext, goPrev])

  useEffect(() => {
    if (!carousel || !trackRef.current) return
    const track = trackRef.current
    let currentScroll = 0

    autoTimerRef.current = setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth
      currentScroll += 320
      if (currentScroll > maxScroll) currentScroll = 0
      track.scrollTo({ left: currentScroll, behavior: "smooth" })
    }, 4000)

    const handleEnter = () => clearInterval(autoTimerRef.current!)
    const handleLeave = () => {
      autoTimerRef.current = setInterval(() => {
        const maxScroll = track.scrollWidth - track.clientWidth
        currentScroll += 320
        if (currentScroll > maxScroll) currentScroll = 0
        track.scrollTo({ left: currentScroll, behavior: "smooth" })
      }, 4000)
    }

    track.addEventListener("mouseenter", handleEnter)
    track.addEventListener("mouseleave", handleLeave)

    return () => {
      clearInterval(autoTimerRef.current!)
      track.removeEventListener("mouseenter", handleEnter)
      track.removeEventListener("mouseleave", handleLeave)
    }
  }, [carousel, images])

  if (!images.length) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-14">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>}
            {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
          </div>
        )}

        {carousel ? (
          <div className="relative group">
            <div
              ref={trackRef}
              className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="snap-start shrink-0 w-72 md:w-80 cursor-pointer focus:outline-none"
                >
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {img.title && (
                    <p className="text-sm text-gray-600 mt-2 text-left font-medium">{img.title}</p>
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                if (trackRef.current) {
                  trackRef.current.scrollBy({ left: -340, behavior: "smooth" })
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-amber-500 hover:border-amber-300 transition-all opacity-0 group-hover:opacity-100 shadow-md"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                if (trackRef.current) {
                  trackRef.current.scrollBy({ left: 340, behavior: "smooth" })
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-amber-500 hover:border-amber-300 transition-all opacity-0 group-hover:opacity-100 shadow-md"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="cursor-pointer focus:outline-none group"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {img.title && (
                  <p className="text-sm text-gray-600 mt-1.5 text-left font-medium">{img.title}</p>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <div className="max-w-5xl w-full max-h-full p-4 md:p-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center">
              <div className="bg-black/50 border border-white/10 p-1 md:p-2 max-h-[75vh] flex items-center justify-center">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="max-h-[73vh] max-w-full object-contain"
                />
              </div>
              <div className="text-center mt-4 max-w-2xl px-4">
                {images[currentIndex].title && (
                  <h3 className="text-lg md:text-xl text-white font-medium">
                    {images[currentIndex].title}
                  </h3>
                )}
                <p className="text-white/40 text-xs uppercase tracking-widest mt-3">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
