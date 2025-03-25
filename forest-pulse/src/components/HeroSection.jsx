import React from "react";
import BlurText from "../assets/BlurText";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center p-6 text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/forest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute z-1 w-full h-full"
        style={{
          backgroundColor: "rgba(18, 18, 18, 0.7)",
          background: "linear-gradient(to bottom right, rgba(18, 18, 18, 0.9), rgba(30, 30, 30, 0.7))",
        }}
      />

      <div className="relative z-2 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="space-y-6 w-full">
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "#32CD32" }}
          >
            Join the Green Movement
          </h1>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "#B0B0B0" }}
          >
            Plant trees, track your impact, and grow with our community.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <button
              className="font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{
                backgroundColor: "#32CD32",
                color: "#121212",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                ":hover": {
                  backgroundColor: "#2AC420",
                  transform: "translateY(-2px)",
                  boxShadow: "0 7px 14px rgba(50, 205, 50, 0.3)",
                },
                ":active": {
                  transform: "translateY(0)",
                }
              }}
            >
              🌿 Plant a Virtual Tree
            </button>
            
            <button
              className="font-bold py-3 px-6 rounded-lg border-2 transition-all duration-300 transform hover:-translate-y-1"
              style={{
                borderColor: "#32CD32",
                color: "#32CD32",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                ":hover": {
                  backgroundColor: "#32CD32",
                  color: "#121212",
                  transform: "translateY(-2px)",
                  boxShadow: "0 7px 14px rgba(50, 205, 50, 0.3)",
                },
                ":active": {
                  transform: "translateY(0)",
                }
              }}
            >
              🔗 Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}