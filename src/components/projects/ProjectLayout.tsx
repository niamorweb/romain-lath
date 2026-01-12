import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import Image from "next/image";

interface SelectedMedia {
  image: string;
  textBtn: string;
  isVideo?: boolean;
}

interface ProjectViewLayoutProps {
  onClose: () => void;
  children: (onImageClick: (media: SelectedMedia) => void) => React.ReactNode;
  accentColor?: string;
}

export default function ProjectLayout({
  onClose,
  children,
  accentColor = "indigo-500",
}: ProjectViewLayoutProps) {
  const containerRef = useRef(null);
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(
    null
  );
  const selectionClass = `selection:bg-${
    accentColor.split("-")[0]
  }-500/30 selection:text-${accentColor.split("-")[0]}-200`;
  const hoverBorderClass = `hover:border-${accentColor.split("-")[0]}-500`;
  const hoverTextClass = `hover:text-${accentColor.split("-")[0]}-400`;

  return (
    <>
      <motion.div
        ref={containerRef}
        className={`fixed inset-0 z-[100] bg-[#020408] overflow-y-auto overflow-x-hidden no-scrollbar ${selectionClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          onClick={onClose}
          className={`fixed top-6 right-6 z-[110] group bg-black/40 backdrop-blur-md border border-white/10 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300`}
        >
          <X
            size={24}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
        </button>

        {children(setSelectedMedia)}
      </motion.div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              layoutId={`img-${selectedMedia.image}`}
              className="relative w-full max-w-7xl aspect-video rounded-lg overflow-hidden shadow-2xl bg-[#0a0a0a] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.isVideo ? (
                <video
                  src={selectedMedia.image}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Votre navigateur ne supporte pas la lecture de vidéo.
                </video>
              ) : (
                <Image
                  src={selectedMedia.image}
                  alt={selectedMedia.textBtn || "Project Media"}
                  fill
                  className="object-contain"
                  priority
                />
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex justify-between items-end pointer-events-none"
              >
                <div className="pointer-events-auto">
                  <h3 className="text-white text-xl font-bold">
                    {selectedMedia.textBtn}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {selectedMedia.isVideo
                      ? "Lecture vidéo"
                      : "Cliquer à l'extérieur pour fermer"}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors pointer-events-auto"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
