"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientText, ShineText } from "@/components/react-bits";
import LiquidEther from "@/components/LiquidEther";
import { Zap, Brain, Target, LayoutDashboard, GraduationCap, Mail, ArrowRight, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Refs for GSAP animations
  const betaBannerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const problemTitleRef = useRef<HTMLHeadingElement>(null);
  const problemCardsRef = useRef<HTMLDivElement[]>([]);
  const howItWorksTitleRef = useRef<HTMLHeadingElement>(null);
  const howItWorksSubtitleRef = useRef<HTMLParagraphElement>(null);
  const howItWorksCardsRef = useRef<HTMLDivElement[]>([]);
  const purpleGlowRef = useRef<HTMLDivElement>(null);
  const featuresTitleRef = useRef<HTMLHeadingElement>(null);
  const featuresSubtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresCardsRef = useRef<HTMLDivElement[]>([]);
  const pricingTitleRef = useRef<HTMLHeadingElement>(null);
  const pricingSubtitleRef = useRef<HTMLParagraphElement>(null);
  const pricingCardRef = useRef<HTMLDivElement>(null);
  const waitlistTitleRef = useRef<HTMLDivElement>(null);
  const waitlistCardRef = useRef<HTMLDivElement>(null);
  const waitlistFormRef = useRef<HTMLDivElement>(null);
  const submittedMessageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Beta Banner Animation
    if (betaBannerRef.current) {
      gsap.fromTo(
        betaBannerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }

    // Hero Section Animations
    const heroTimeline = gsap.timeline();
    if (heroTitleRef.current) {
      heroTimeline.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );
    }
    if (heroSubtitleRef.current) {
      heroTimeline.fromTo(
        heroSubtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );
    }
    if (heroButtonsRef.current) {
      heroTimeline.fromTo(
        heroButtonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );
    }

    // Problem Section Scroll Animations
    if (problemTitleRef.current) {
      gsap.fromTo(
        problemTitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: problemTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    problemCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onEnter: () => {
              // Add hover effect
              card.addEventListener("mouseenter", () => {
                gsap.to(card, { scale: 1.05, duration: 0.2 });
              });
              card.addEventListener("mouseleave", () => {
                gsap.to(card, { scale: 1, duration: 0.2 });
              });
            },
          }
        );
      }
    });

    // Purple Glow Animation
    if (purpleGlowRef.current) {
      gsap.fromTo(
        purpleGlowRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: purpleGlowRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // How It Works Section
    if (howItWorksTitleRef.current) {
      gsap.fromTo(
        howItWorksTitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: howItWorksTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (howItWorksSubtitleRef.current) {
      gsap.fromTo(
        howItWorksSubtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: howItWorksSubtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    howItWorksCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onEnter: () => {
              card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -5, duration: 0.2 });
              });
              card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, duration: 0.2 });
              });
            },
          }
        );
      }
    });

    // Features Section
    if (featuresTitleRef.current) {
      gsap.fromTo(
        featuresTitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: featuresTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (featuresSubtitleRef.current) {
      gsap.fromTo(
        featuresSubtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: featuresSubtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    featuresCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onEnter: () => {
              card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -5, scale: 1.02, duration: 0.2 });
              });
              card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, scale: 1, duration: 0.2 });
              });
            },
          }
        );
      }
    });

    // Pricing Section
    if (pricingTitleRef.current) {
      gsap.fromTo(
        pricingTitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: pricingTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (pricingSubtitleRef.current) {
      gsap.fromTo(
        pricingSubtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: pricingSubtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (pricingCardRef.current) {
      gsap.fromTo(
        pricingCardRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
          scrollTrigger: {
            trigger: pricingCardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onEnter: () => {
            pricingCardRef.current?.addEventListener("mouseenter", () => {
              gsap.to(pricingCardRef.current, { scale: 1.02, duration: 0.2 });
            });
            pricingCardRef.current?.addEventListener("mouseleave", () => {
              gsap.to(pricingCardRef.current, { scale: 1, duration: 0.2 });
            });
          },
        }
      );
    }

    // Waitlist Section
    if (waitlistTitleRef.current) {
      gsap.fromTo(
        waitlistTitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: waitlistTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (waitlistCardRef.current) {
      gsap.fromTo(
        waitlistCardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: waitlistCardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (waitlistFormRef.current) {
      gsap.fromTo(
        waitlistFormRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.4,
          scrollTrigger: {
            trigger: waitlistFormRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Submitted message animation
  useEffect(() => {
    if (submitted && submittedMessageRef.current) {
      gsap.fromTo(
        submittedMessageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3 }
      );
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        // Handle error (email already exists, etc.)
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Beta Banner */}
      <div ref={betaBannerRef} className="relative z-50 px-4 py-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-1.5 text-sm text-purple-300 backdrop-blur-sm border border-purple-500/30">
          <span>PhishForge.ai is now in beta</span>
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 min-h-[80vh] flex items-center bg-black">
        {/* LiquidEther Background */}
        <div className="absolute inset-0 z-0 opacity-60" style={{ width: '100%', height: '100%' }}>
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl text-center w-full">
          <h1 
            ref={heroTitleRef}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6"
          >
            <GradientText gradient="rainbow" className="text-4xl sm:text-6xl lg:text-7xl">
              Forge Hyper-Realistic AI Phishing Simulations
            </GradientText>
          </h1>
          <p 
            ref={heroSubtitleRef}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-300 mb-10"
          >
            Train Your Team Against Tomorrow's Attacks - Affordable for SMBs
          </p>
          <div 
            ref={heroButtonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              variant="white" 
              className="text-base px-8 py-6"
              onClick={() => {
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outlineWhite" 
              className="text-base px-8 py-6"
            >
              <FileText className="mr-2 h-5 w-5" />
              Read the docs
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 
            ref={problemTitleRef}
            className="text-3xl font-bold text-center mb-12"
          >
            <ShineText className="text-3xl">The Phishing Threat is Real</ShineText>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: "91%", desc: "of cyber attacks start with a phishing email" },
              { stat: "$4.9M", desc: "average cost of a data breach for SMBs" },
              { stat: "3.4B", desc: "phishing emails sent daily worldwide" }
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) problemCardsRef.current[index] = el;
                }}
              >
                <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-purple-400 text-4xl">{item.stat}</CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      {item.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-black">
        {/* Purple Glow Effect */}
        <div 
          ref={purpleGlowRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full"
        ></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 
            ref={howItWorksTitleRef}
            className="text-3xl font-bold text-center mb-4 text-white"
          >
            How It Works
          </h2>
          <p 
            ref={howItWorksSubtitleRef}
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Get started in minutes with our AI-powered platform
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Define Campaign", desc: "Set your target audience, objectives, and timeline in seconds", num: "1" },
              { icon: Brain, title: "AI Generates", desc: "Our AI creates hyper-realistic phishing emails tailored to your industry", num: "2" },
              { icon: Zap, title: "Launch & Track", desc: "Send campaigns and monitor real-time engagement metrics", num: "3" },
              { icon: GraduationCap, title: "Educate & Improve", desc: "Deliver instant training and track team improvement over time", num: "4" }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) howItWorksCardsRef.current[index] = el;
                  }}
                  className="relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                    <span className="text-purple-400 font-bold text-xl">{step.num}</span>
                  </div>
                  <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm h-full pt-8">
                    <CardHeader>
                      <Icon className="h-10 w-10 text-purple-400 mb-4" />
                      <CardTitle className="text-white">{step.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {step.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 
            ref={featuresTitleRef}
            className="text-3xl font-bold text-center mb-4 text-white"
          >
            Powerful Features
          </h2>
          <p 
            ref={featuresSubtitleRef}
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Everything you need to build a security-aware team
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Brain, title: "AI Email Generator", desc: "Generate convincing phishing emails using advanced AI models" },
              { icon: Target, title: "Campaign Management", desc: "Create, schedule, and manage multiple campaigns effortlessly" },
              { icon: LayoutDashboard, title: "Analytics Dashboard", desc: "Real-time insights into click rates, vulnerabilities, and trends" },
              { icon: GraduationCap, title: "Instant Education", desc: "Automated training modules when users fall for simulations" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) featuresCardsRef.current[index] = el;
                  }}
                >
                  <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
                    <CardHeader>
                      <Icon className="h-8 w-8 text-purple-400 mb-2" />
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {feature.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 
            ref={pricingTitleRef}
            className="text-3xl font-bold mb-4 text-white"
          >
            Affordable Pricing for SMBs
          </h2>
          <p 
            ref={pricingSubtitleRef}
            className="text-xl text-gray-400 mb-8"
          >
            Enterprise-grade security training at a fraction of the cost
          </p>
          <div ref={pricingCardRef}>
            <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Coming Soon</CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  We're putting the finishing touches on our pricing plans. 
                  Join the waitlist to be notified when we launch!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <div 
            ref={waitlistTitleRef}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Join the Waitlist
            </h2>
            <p className="text-lg text-gray-400">
              Be among the first to access PhishForge.ai when we launch
            </p>
          </div>
          <div ref={waitlistCardRef}>
            <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div 
                    ref={waitlistFormRef}
                    className="flex gap-4"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                    />
                    <Button type="submit" variant="white" size="lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Submit
                    </Button>
                  </div>
                  {submitted && (
                    <p 
                      ref={submittedMessageRef}
                      className="text-sm text-purple-400 text-center"
                    >
                      ✓ Thanks! We'll be in touch soon.
                    </p>
                  )}
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Or use our{" "}
                  <a 
                    href="https://tally.so" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Tally.so form
                  </a>
                  {" "}for more options
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">PhishForge.ai</h3>
              <p className="text-sm text-gray-400">
                AI-powered phishing simulation for modern teams
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} PhishForge.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
