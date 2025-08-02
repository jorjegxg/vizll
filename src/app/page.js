"use client";

import { addDoc, collection } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import content from "./components/content";
import { db } from "./firebase";

export default function Home() {
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderBg(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "messages"), {
      name: e.target[0].value.trim(),
      phone: e.target[1].value,
      email: e.target[2].value.trim(),
      message: e.target[3].value.trim(),
      vazut: false,
    }).then(() => {
      alert(content.form.successMessage);
      console.log("Document successfully written!");
    });

    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-nav opacity-90 py-4 ${
          headerBg ? "bg-brand-dark/98" : "bg-brand-dark/95"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-8">
          <a href="#" className="text-2xl font-bold text-[var(--light)]">
            {content.title}
          </a>
          <ul className="hidden md:flex gap-8 text-white">
            {content.nav.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-brand-primary transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section
        id={"Home"}
        className="hero h-screen flex items-center justify-center relative bg-hero-gradient fade-in"
      >
        <div className="text-center  relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 opacity-0 animate-slideUp delay-500">
            {content.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-0 animate-slideUp delay-1000">
            {content.hero.subheading}
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-brand-primary rounded-full font-bold text-white relative overflow-hidden transition-transform transform hover:-translate-y-1 shadow-md"
          >
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 hover:left-full"></span>
            {content.hero.cta}
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        id={content.nav[0].toLowerCase()}
        className="py-20  fade-in bg-[var(--dark)]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 fade-in">
            {content.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[var(--light)] rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all fade-in"
              >
                <div className="text-4xl mb-4 ">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--dark)]">
                  {title}
                </h3>
                <p className="text-[var(--brown)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id={content.nav[1].toLowerCase()}
        className="py-20 bg-[var(--light)] text-[var(--dark)] "
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 fade-in">
            {content.portfolioTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {content.portfolio.map(({ title, subtitle }, idx) => (
              <div
                key={idx}
                className="relative h-72 rounded-xl  bg-[var(--dark)] overflow-hidden cursor-pointer transform hover:scale-105 transition-all fade-in text-[var(--light)]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <div className="text-center">
                    <h4 className="text-lg font-bold">{title}</h4>
                    <p className="text-sm">{subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id={content.nav[2].toLowerCase()}
        className="py-20 bg-[var(--dark)] text-[var(--light)]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 fade-in">
            {content.contact.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="fade-in">
              <h3 className="text-2xl mb-4">{content.contact.subtitle}</h3>
              <ul className="space-y-4">
                {content.contact.reasons.map((reason, idx) => (
                  <li key={idx}>{reason}</li>
                ))}
              </ul>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl fade-in"
            >
              {content.form.fields.map(({ type, placeholder }, i) => (
                <div className="mb-4" key={i}>
                  {type !== "textarea" ? (
                    <input
                      type={type}
                      placeholder={placeholder}
                      required={type !== "tel"}
                      className="w-full p-3 rounded-md bg-white/20 placeholder-white text-white"
                    />
                  ) : (
                    <textarea
                      rows="4"
                      placeholder={placeholder}
                      required
                      className="w-full p-3 rounded-md bg-white/20 placeholder-white text-white"
                    ></textarea>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-brand-primary w-full py-3 rounded-full font-bold hover:bg-brand-hover transition-transform transform hover:-translate-y-1"
              >
                {content.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--brown)] text-var(--light) py-6 text-center">
        <p>
          &copy; 2025 {content.title}. {content.footer}
        </p>
      </footer>
    </>
  );
}
