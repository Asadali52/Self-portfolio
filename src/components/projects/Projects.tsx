"use client";
import React, { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "web",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and interactive elements.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts with beautiful UI and location-based services.",
      technologies: ["React", "OpenWeather API", "CSS3", "JavaScript"],
      category: "web",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing social media accounts with analytics, scheduling, and content management features.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      category: "web",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 6,
      title: "Restaurant Website",
      description: "A modern restaurant website with online ordering, menu management, and reservation system.",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      category: "web",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 7,
      title: "Fitness Tracker App",
      description: "A mobile fitness tracking application with workout plans, progress monitoring, and social features for motivation.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 8,
      title: "Food Delivery App",
      description: "A food delivery mobile app with real-time tracking, payment integration, and restaurant management system.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 9,
      title: "Chat Application",
      description: "A real-time chat application with video calling, file sharing, and group chat functionality.",
      technologies: ["React Native", "WebRTC", "Socket.io", "Firebase"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      liveLink: "#",
    },
    {
      id: 10,
      title: "Banking App Design",
      description: "A comprehensive banking app design with modern UI/UX, focusing on security, accessibility, and user experience.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      category: "ui",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 11,
      title: "E-Learning Platform Design",
      description: "A complete design system for an e-learning platform with intuitive navigation and engaging user interface.",
      technologies: ["Figma", "Design Systems", "User Testing", "Prototyping"],
      category: "ui",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      liveLink: "#",
    },
    {
      id: 12,
      title: "Travel App Design",
      description: "A travel booking app design with beautiful illustrations, smooth animations, and intuitive booking flow.",
      technologies: ["Adobe XD", "Illustration", "Animation", "User Journey"],
      category: "ui",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      liveLink: "#",
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ui", label: "UI/UX Design" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-8">
      {/* Beautiful Heading Section */}
      <div className="text-center mb-8">
        <div className="inline-block mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            My Work
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#012641] via-blue-600 to-[#012641] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio of innovative projects that showcase my expertise in web development, 
          mobile applications, and UI/UX design. Each project represents a unique challenge and solution.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-[#012641] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  // Fallback to a default image if the original fails
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[#012641] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links - Now at bottom */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.liveLink}
                  className="flex-1 bg-[#012641] text-white text-center py-2 px-4 rounded-md hover:bg-[#011a2e] transition-colors duration-300 text-sm font-medium"
                >
                  Live Demo
                </a>
                <a target="_blank"
                  href={"https://github.com/Asadali52?tab=repositories"}
                  className="flex-1 border border-[#012641] text-[#012641] text-center py-2 px-4 rounded-md hover:bg-[#012641] hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-3">
          Interested in working together? Let&apos;s discuss your project!
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#012641] text-white px-8 py-3 rounded-md hover:bg-[#011a2e] transition-colors duration-300 font-medium"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Projects; 