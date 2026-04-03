"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function PageLoaderContent() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Trigger loader on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0); // Ensure scroll to top on every route change
    }, 800); // 800ms for a snappier feel on secondary transitions

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          suppressHydrationWarning
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999,
            backgroundColor: "#0A1F44",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            pointerEvents: "all",
            userSelect: "none",
            overflow: "hidden",
            willChange: "opacity",
            transform: "translateZ(0)"
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px"
          }}>
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: 1
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity
              }}
              style={{
                willChange: "transform, opacity",
                width: isMobile ? "100px" : "140px",
                height: isMobile ? "100px" : "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src="/logo.png"
                alt="Janvi Infrastructure Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </motion.div>

            {/* Title Section */}
            <div style={{ textAlign: "center" }}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: "white",
                  fontSize: isMobile ? "16px" : "22px",
                  fontWeight: "800",
                  letterSpacing: isMobile ? "2px" : "4px",
                  margin: 0,
                  textTransform: "uppercase"
                }}
              >
                Janvi <span style={{ color: "#FF4B2B" }}>Infrastructure</span>
              </motion.h2>
              <div
                style={{
                  height: "3px",
                  width: isMobile ? "32px" : "48px",
                  backgroundColor: "#FF4B2B",
                  margin: isMobile ? "8px auto 0" : "12px auto 0",
                  borderRadius: "99px"
                }}
              />
            </div>

            {/* Progress Indicator */}
            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: i === 1 ? "#FF4B2B" : "white",
                    borderRadius: "50%"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderContent />
    </Suspense>
  );
}
