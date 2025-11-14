"use client";

import React, { useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "vision", label: "Vision" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Connect" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    setTimeout(() => setActive(null), 300);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(2, 6, 23, 0.7)", // transparent dark overlay
        backdropFilter: "blur(8px)", // adds a subtle glass effect
        padding: "0", // no extra padding around the bar
      }}
    >
      <nav
        style={{
          height: "64px", // perfect navbar height (like ChatGPT’s)
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px", // spacing on the sides only
          margin: 0,
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            fontFamily: "sans-serif",
            fontStyle: "italic",
            color: "inherit",
          }}
        >
          Hatem Hamdy
        </div>

        {/* Navigation */}
        <ul
          style={{
            display: "flex",
            gap: "32px",
            margin: 0,
            padding: 0,
            listStyle: "none",
            color: "inherit",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <span
                onClick={() => handleClick(item.id)}
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  color: "inherit",
                  padding: 0,
                  margin: 0,
                  font: "inherit",
                  display: "inline-block",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: active === item.id ? "translateY(-4px)" : "translateY(0)",
                  opacity: active === item.id ? 0.8 : 1,
                }}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}  