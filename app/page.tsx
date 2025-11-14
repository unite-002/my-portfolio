"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Linkedin, Mail, Instagram } from "lucide-react";

// --- Updated TEAM_MEMBERS array with paragraph + key points ---
const TEAM_MEMBERS = [
  {
    title: "Artificial Intelligence & Machine Learning",
    text: `Design, develop, and optimize large-scale AI models that power Quirra’s adaptive intelligence. Drive innovation in transformer-based architectures, reinforcement learning, and model fine-tuning.`,
    points: [
      "Build and deploy large-scale neural networks.",
      "Optimize transformer architectures for performance and efficiency.",
      "Collaborate on Quirra’s cognitive memory and reasoning systems.",
      "Ensure AI aligns with ethical and privacy-first principles."
    ]
  },
  {
    title: "Backend Engineering & Distributed Systems",
    text: `Create and maintain high-performance backend systems that support Quirra’s global platform. Ensure reliability, scalability, and low-latency communication across services.`,
    points: [
      "Design distributed systems and APIs for AI services.",
      "Implement scalable, fault-tolerant architectures.",
      "Collaborate with AI engineers to deploy models efficiently.",
      "Ensure backend security, monitoring, and observability."
    ]
  },
  {
    title: "Cloud Infrastructure & DevOps",
    text: `Manage Quirra’s multi-cloud GPU infrastructure, ensuring seamless operation, high availability, and scalability of AI workloads worldwide.`,
    points: [
      "Architect cloud solutions on GCP, OCI, and Azure.",
      "Implement automation for deployment, scaling, and monitoring.",
      "Optimize infrastructure costs and GPU utilization.",
      "Collaborate with backend and AI teams for smooth model deployment."
    ]
  },
  {
    title: "Security Engineering",
    text: `Protect Quirra’s systems and data from cyber threats. Build security measures that ensure privacy, integrity, and trust in the platform.`,
    points: [
      "Conduct threat modeling and risk assessments.",
      "Implement zero-trust architectures and privacy-first designs.",
      "Monitor, detect, and respond to security incidents.",
      "Collaborate with product and cloud teams to secure all systems."
    ]
  },
  {
    title: "Product Engineering & User Interfaces",
    text: `Develop front-end interfaces that make interacting with Quirra intuitive, responsive, and emotionally intelligent. Focus on usability and real-time performance.`,
    points: [
      "Build scalable web applications using React/Next.js.",
      "Design UI/UX to enhance user experience with AI.",
      "Collaborate with product and design teams on features.",
      "Ensure responsiveness, accessibility, and performance."
    ]
  },
  {
    title: "Operations, Strategy & Partnerships",
    text: `Drive strategic initiatives, manage team coordination, and oversee partnerships that accelerate Quirra’s growth and operational excellence.`,
    points: [
      "Lead operational processes and strategic planning.",
      "Coordinate cross-team projects and initiatives.",
      "Manage external partnerships and collaborations.",
      "Ensure teams have resources and processes to execute efficiently."
    ]
  },
  {
    title: "AI Safety & Evaluation",
    text: `Ensure Quirra’s AI behaves responsibly and safely. Design evaluation frameworks to test, monitor, and guide AI alignment and ethical behavior.`,
    points: [
      "Perform red-teaming and safety evaluations.",
      "Develop testing protocols for AI reliability and alignment.",
      "Monitor system behavior for safety and compliance.",
      "Collaborate with AI engineers to iterate on responsible AI design."
    ]
  },
];

// --- Top Navigation ---
const TopNav = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href") || "");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        link.classList.add("clicked");
        setTimeout(() => link.classList.remove("clicked"), 300);
      });
    });
  }, []);

  return (
    <>
      <style>
        {`
          .nav-link {
            color: white;
            text-decoration: none;
            transition: transform 0.3s ease, color 0.3s ease;
            margin: 0 16px;
          }
          .nav-link:hover { color: white; }
          .nav-link.clicked { transform: translateY(-5px); }

          .btn-join {
            background: transparent;
            color: #00c6ff;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: transform 0.2s ease, opacity 0.2s ease;
          }
          .btn-join:hover {
            transform: translateY(-3px);
            opacity: 0.85;
          }
        `}
      </style>

      <div className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <a href="#hero" className="text-xl font-bold text-white nav-link">
            Hatem Hamdy
          </a>
          <div className="flex text-lg">
            {["About", "Projects", "Vision", "Team", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section
    id="hero"
    className="hero min-h-screen pt-32 pb-24 flex flex-col justify-center items-start px-8"
  >
    <h1 className="text-6xl font-extrabold mb-2 leading-tight">
      Building the next generation of{" "}
      <span className="text-indigo-400">conscious intelligence</span>.
    </h1>
    <p className="max-w-[55%] text-2xl leading-relaxed text-gray-300 font-semibold mt-1">
      Founder of QuirrAI — creating intelligence that learns with you, not just from you.
    </p>
    <a href="#team" className="btn-join mt-6 inline-block">
      Join the Vision
    </a>
  </section>
);

// --- Split Section ---
interface SplitSectionProps {
  title: string;
  text: string;
  reverse?: boolean;
  imageSrc?: string;
  noImage?: boolean;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  title,
  text,
  reverse = false,
  imageSrc = "/placeholder.jpg",
  noImage = false,
}) => {
  return (
    <section
      id={title.toLowerCase()}
      className={`py-24 flex ${reverse ? "justify-end" : "justify-start"}`}
    >
      <style>
        {`
          .image-wrapper {
            border-radius: 0.5rem;
            overflow: hidden;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            box-shadow: 0 8px 30px rgba(0,0,0,0.4);
          }

          .image-wrapper:hover {
            transform: translateY(-8px);
            box-shadow: none;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto w-full px-8 flex items-start gap-12">
        {reverse ? (
          <>
            {!noImage && (
              <div className="flex-1 flex justify-center items-start mt-2">
                <div className="w-[85%] h-[420px] image-wrapper">
                  <Image
                    src={imageSrc}
                    alt={`${title} section image`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <div
              className={`flex flex-col items-start text-left ${
                noImage ? "max-w-[55%]" : "max-w-[55%] pl-8"
              }`}
            >
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-indigo-500">|</span> {title}
              </h2>
              <p className="text-[1.15rem] text-gray-300 leading-relaxed tracking-wide space-y-6">
                {text}
              </p>
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex flex-col items-start text-left ${
                noImage ? "max-w-[55%]" : "max-w-[55%]"
              }`}
            >
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-indigo-500">|</span> {title}
              </h2>
              <p className="text-[1.15rem] text-gray-300 leading-relaxed tracking-wide space-y-6">
                {text}
              </p>
            </div>

            {!noImage && (
              <div className="flex-1 flex justify-center items-start mt-2">
                <div className="w-[85%] h-[420px] image-wrapper">
                  <Image
                    src={imageSrc}
                    alt={`${title} section image`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// --- Team Section ---
const TeamMarquee = () => {
  const members = TEAM_MEMBERS;

  return (
    <section id="team" className="py-24 px-6">
      <style>
        {`
          .team-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .team-card {
            width: 20rem;
            min-height: 26rem;
            border-radius: 2rem;
            background: rgba(255,255,255,0.04);
            backdrop-filter: blur(20px) saturate(160%);
            box-shadow: 0 8px 30px rgba(0,0,0,0.4);
            transition: all 0.4s ease;
            animation: float 6s ease-in-out infinite;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1.8rem;
          }

          .team-card:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 40px rgba(0,0,0,0.6);
          }

          .team-card h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1rem;
          }

          .team-card p {
            color: #d1d5db;
            line-height: 1.6;
            font-size: 0.95rem;
          }

          .team-card ul {
            margin-top: 0.8rem;
            padding-left: 1.2rem;
            list-style: disc;
            color: #d1d5db;
          }

          .team-card button {
            background: rgba(255,255,255,0.08);
            border: none;
            color: white;
            border-radius: 1rem;
            padding: 0.6rem;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
          }

          .team-card button:hover {
            background: rgba(255,255,255,0.15);
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-indigo-500">|</span> The team we're looking for:
Join us in building the future of AI technology.
        </h2>

        <div className="team-grid">
          {members.map((member, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 0.3}s` }}
              className="team-card"
            >
              <div>
                <h3>{member.title}</h3>
                <p>{member.text}</p>
                {member.points && (
                  <ul>
                    {member.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                onClick={() => {
                  const target = document.querySelector("#contact");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---
export default function Home() {
  return (
    <div id="main-portfolio-content" className="bg-black text-white">
      <TopNav />
      <Hero />

      <SplitSection
        title="About"
        text="I am Hatem Hamdy, an AI and technology visionary driven by a deep passion to create conscious intelligence systems that shape a better, more connected future. As the founder of QuirrAI, I am on a mission to pioneer ethical AI technologies that push the boundaries of innovation while enhancing the human experience. My work blends AI with human-centered design to ensure technology evolves in harmony with humanity’s values and aspirations."
        imageSrc="/images/about.jpg"
      />

      <SplitSection
        title="Projects"
        text="My projects are more than technical achievements — they are the foundation for a future where AI and technology seamlessly enhance human life. At QuirrAI, I’ve led the development of a conscious intelligence platform that bridges the gap between humans and AI in a meaningful, ethical way. 

Each project I build is focused on innovation, scalability, and positive impact — from advanced cybersecurity solutions that safeguard data, to adaptive AI models that evolve with human needs. These systems aren’t just built for today; they’re designed to empower the generations of tomorrow."
        reverse
        imageSrc="/images/projects.jpg"
      />

      <SplitSection
        title="Vision"
        text="My vision is to create technologies that redefine human interaction with AI, blending emotional intelligence, ethics, and innovation. I strive to ensure that conscious AI systems not only understand us but amplify the best in us, leading humanity into a smarter, safer, and more connected future."
        imageSrc="/images/vision.jpg"
      />

      <TeamMarquee />

      <SplitSection
        title="Contact"
        text="Let’s connect and explore how we can build the future together.
        Whether you’re interested in collaborating, joining the team, or discussing ideas, I’m always open to meaningful conversations."
        reverse
        noImage
      />

      {/* BOTTOM EMAIL LEFT + ADDRESS RIGHT */}
      <div className="w-full flex justify-between items-center mt-32 pb-10 px-8" id="contact">
        <p className="text-lg text-white ml-4">
          Email: <a href="mailto:connect.hatem.hamdy@gmail.com" className="underline hover:text-white">connect.hatem.hamdy@gmail.com</a>
        </p>
        <p className="text-lg text-gray-300">San Francisco, CA</p>
      </div>

      {/* Footer */}
      <footer className="bg-black/60 text-white py-6 px-8 mt-12 flex items-center justify-between">
        <div className="flex items-center space-x-10">
         <Linkedin
           className="w-6 h-6 text-gray-300 hover:text-white hover:scale-110 transition-transform cursor-pointer"
           onClick={() =>
             window.open("https://www.linkedin.com/in/hatem-hamdy-444517396", "_blank")
           }
          />

          <Mail 
            className="w-6 h-6 text-gray-300 hover:text-white hover:scale-110 transition-transform cursor-pointer"
            onClick={() => window.location.href = "mailto:connect.hatem.hamdy@gmail.com"}
          />
          <Instagram 
            className="w-6 h-6 text-gray-300 hover:text-white hover:scale-110 transition-transform cursor-pointer"
            onClick={() =>
              window.open("https://www.instagram.com/h_atem_002?igsh=MWZjampiYWl3eHZrNA==", "_blank")
            }
          />
        </div>

        <div className="text-right text-sm">
          © 2025 Hatem Hamdy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}