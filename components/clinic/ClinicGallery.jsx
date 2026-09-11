"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClinicGallery({ gallery }) {
  console.log(gallery.filters);
  const [activeFilter, setActiveFilter] = useState(
    gallery.filters[0]?.id || "all",
  );

  const [selectedImage, setSelectedImage] = useState(null);

  //  Filter images based on active filter
  const filteredImages =
    activeFilter === "all"
      ? gallery.images
      : gallery.images.filter((image) => image.category === activeFilter);

  // Selected image inside filtered
  const selectedIndex = selectedImage
    ? filteredImages.findIndex((image) => image.id === selectedImage.id)
    : -1;

  /*
   * Change filter
   *
   * Close the lightbox when changing filters so
   * the selected image never belongs to a hidden category.
   */
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setSelectedImage(null);
  };

  // Open
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close
  const handleClose = () => {
    setSelectedImage(null);
  };

  // Previous
  const handlePrevious = () => {
    if (selectedIndex === -1 || filteredImages.length <= 1) {
      return;
    }

    const previousIndex =
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  // Next
  const handleNext = () => {
    if (selectedIndex === -1 || filteredImages.length <= 1) {
      return;
    }

    const nextIndex =
      selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  //  Keyboard navigation + body scroll lock
  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedIndex]);

  return (
    <>
      <section id={gallery.id} className="bg-white py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}

          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              {gallery.eyebrow}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#241c24] sm:text-4xl lg:text-5xl">
              {gallery.title}
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              {gallery.description}
            </p>
          </div>

          {/* Filter */}

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-[#e5e7eb] bg-[#f9fafb] p-1.5">
              {gallery.filters.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => handleFilterChange(filter.id)}
                    className={`
                      rounded-full
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary
                      focus-visible:ring-offset-2
                      ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "text-[#241c24] hover:bg-white hover:text-primary"
                      }
                    `}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masonry Gallery */}

          <div className="mx-auto mt-12  columns-1 gap-5 sm:columns-2 lg:columns-4">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => handleImageClick(image)}
                className="
                  group
                  relative
                  mb-5
                  block
                  w-full
                  break-inside-avoid
                  overflow-hidden
                  rounded-2xl
                  bg-[#f9fafb]
                  text-left
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-4
                "
                aria-label={`View ${image.title}`}
              >
                {/* Image */}

                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={800}
                  className="
          h-56
          w-full
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.03]
          sm:h-56
          lg:h-70
        "
                />

                {/* Hover Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/15
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Image Title */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    translate-y-2
                    p-5
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/70">
                    {image.category}
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-white sm:text-lg font-heading">
                    {image.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}

          {filteredImages.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-sm text-gray-500">
                No images available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Light Box */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            backdrop-blur-sm
            sm:p-6
          "
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          {/* Close Button */}

          <button
            type="button"
            onClick={handleClose}
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-md
              transition-colors
              duration-200
              hover:bg-white/20
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              sm:right-6
              sm:top-6
            "
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous Button */}

          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="
                absolute
                left-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition-colors
                duration-200
                hover:bg-white/20
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                sm:left-6
              "
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          {/* LIGHTBOX CONTENT */}

          <div
            className="
              flex
              max-h-[90vh]
              max-w-6xl
              flex-col
              items-center
            "
          >
            {/* Image */}

            <div
              className="
                relative
                max-h-[78vh]
                max-w-[90vw]
                overflow-hidden
                rounded-xl
                sm:max-w-[85vw]
              "
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1800}
                height={1400}
                priority
                className="
                  max-h-[78vh]
                  w-auto
                  max-w-full
                  object-contain
                "
              />
            </div>

            {/* LIGHTBOX CAPTION */}

            <div className="mt-4 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                {selectedImage.category}
              </p>

              <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                {selectedImage.title}
              </h3>

              {filteredImages.length > 1 && (
                <p className="mt-1 text-xs text-white/40">
                  {selectedIndex + 1} / {filteredImages.length}
                </p>
              )}
            </div>
          </div>

          {/*   NEXT BUTTON */}

          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="
                absolute
                right-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition-colors
                duration-200
                hover:bg-white/20
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                sm:right-6
              "
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
