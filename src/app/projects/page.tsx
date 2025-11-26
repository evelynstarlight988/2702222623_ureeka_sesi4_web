"use client";

import { useEffect, useState } from "react";
import Navbar from "@/component/ui/navbar";

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectList = [
    {
      title: "Anime Sketch Colorization – Pix2Pix GAN",
      description: "A deep learning project that transforms anime sketches into fully colored illustrations using the Pix2Pix Generative Adversarial Network. My role focused on preparing the dataset, preprocessing image pairs, and training the Pix2Pix model in Google Colab (including managing epochs, checkpoints, and performance analysis). The final model is capable of generating colored anime-style images from black-and-white line art in real time.",
      tech: ["Pix2Pix GAN", "TensorFlow", "Python", "Google Colab", "Deep Learning"],
      image: "/drawNime.png",
      viewLink: "https://drawnime.streamlit.app/",
      sourceLink: "https://drive.google.com/drive/folders/1h3jzrgSX8Xi9jgTAYoxshLAfyzzZodps?usp=drive_link",
      note: "Built as part of a Deep Learning project focusing on image-to-image translation and GAN-based colorization.",
    },
    {
      title: "YOLOv8 Real-Time Hand Gesture Controlled Snake Game",
      description: "A real-time interactive Snake Game controlled entirely using hand gestures detected through a YOLOv8 model. I processed, prepared, and trained the dataset using Google Colab, including converting the trained YOLOv8 model into TensorFlow.js for browser deployment. The system captures live webcam input, detects gestures using computer vision, and translates the detection results into directional controls for the game.",
      tech: ["YOLOv8", "Python", "Google Colab", "OpenCV", "TensorFlow.js", "JavaScript"],
      image: "/SnakeAI.png",
      viewLink: "https://snake-ai-command.netlify.app/",
      sourceLink: "https://github.com/JustKalvin/Snake_Game_With_Computer_Vision",
      note: "This project was built as part of a Computer Vision assignment, focusing on real-time gesture recognition and interactive gameplay.",
    },
    {
      title: "Chatbot UI Refinement",
      description:
        "A warm-toned chatbot built with Streamlit, featuring modular bubbles and tone/language toggles.",
      tech: ["Python", "Streamlit", "Custom UX"],
      image: "/LLM.png",
      viewLink: "https://michelleal2211-chatbot.streamlit.app/",
      sourceLink: "https://github.com/evelynstarlight988/chatbot/tree/clean-master",
      note: "Note: To try the chatbot without using OpenAI, simply uncheck the 'Use OpenAI backend' box, then choose any model other than GPT from the dropdown. ENJOY!",
    },
    {
      title: "IndoBERT Classifier",
      description:
        "A lightweight NLP model that classifies Indonesian comments for sentiment and relevance.",
      tech: ["Python", "Transformers", "IndoBERT"],
      image: "/XGBoost.png",
      viewLink: "https://drive.google.com/file/d/1BQcBLwJFJu83haJDbVvhwnI9b5ETMNLn/view?usp=sharing",
      sourceLink: "https://colab.research.google.com/drive/1n3ou35TesTNIUA0Lz0F4A3NtbJR5oJ9D?usp=sharing",
      note: "Note: The IndoBERT Classifier is currently under development and will be available soon. For now, just a AI model",
    },
    {
      title: "Diamondcut Showroom Website",
      description:
        "A showroom luxury diamond website built with HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/diamondcut.png",
      viewLink: "https://evelynstarlight988.github.io/DiamondCut/html/login_page.html",
      sourceLink: "https://github.com/evelynstarlight988/DiamondCut",
      note: "Note: This project is a showroom luxury diamond website created as part of a web development course.",
    },
    {
      title: "Effectiveness Comparison of Alzheimer&#39;s Detection Between Keras and YOLOv11",
      description:
        "Conducted a comparative study analyzing the performance of two deep learning approaches—Keras-based CNN and YOLOv11—for Alzheimer’s Disease detection.",
      tech: ["Python", "Keras", "YOLOv11"],
      image: "/paperrm.png",
      viewLink: "https://docs.google.com/document/d/1h6Ec__GjDYczHbb6rgqUrlIvor3D7gma/edit?usp=sharing&ouid=106359014490596554464&rtpof=true&sd=true",
      sourceLink: "https://drive.google.com/drive/folders/1ZxHz2amp7KirtHuX5ij0SG0sMVwu6vYq?usp=sharing",
      note: "Note: This project is a research paper and associated code repository focused on Alzheimer's detection using deep learning techniques.",
    },
    {
      title: "Weather App",
      description: "A real-time weather app using Next.js and external API.",
      tech: ["Next.js", "Tailwind", "Weather API"],
      image: "/weather.png",
      viewLink: "/weather",
      sourceLink: "https://github.com/your-repo/weather-app",
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <Navbar />

      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] border border-gray-700 hover:border-purple-500"
              >
                <div className="aspect-video bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tambahan note */}
                  {project.note && (
                    <p className="text-sm text-gray-400 italic mb-4">
                      {project.note}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.viewLink}
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                    >
                      View Project
                    </a>
                    <a
                      href={project.sourceLink}
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}