import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import ContactModal from "./components/ContactModal";
import SiteFooter from "./components/SiteFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LbcWebsite = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const stories = [
    {
      image: "/Assets/Mecco.png",
      alignment: "object-top",
      quotes: [
        "Entering a new community as a small business leader with a new concept can be a challenge! You look at all the 'what if's' and 'who's who' in the demographic... and that weight alone can be crippling to any entrepreneur.",
        "Before entering our new business endeavor in Frederick, CO, we were welcomed and greeted at the local farmers market by some of the kindest and already established small town business owners... overnight became a family of force.",
        "Opening a business is never as easy as one would think and through the connection, inclusion and transparency of those new friendships... we were able to build a network of trust. Never doubt the strength of the community around you.",
      ],
      author: "Isaac Olson & Shane Stinn",
      role: "Owners of 2025 Frederick Small Business of the Year, MECO Coffee Collective",
    },
    {
      image: "/Assets/DMC-1-16.jpg",
      alignment: "object-center",
      quotes: [
        "It’s been really helpful, too find the support of a community full of fellow business owners. There’s so much to be learned from other people’s experiences and getting to hear from people willing to share what they would do differently if they could to help other people not learn the hard way.",
        "That sharing also helps to shorten the learning curve quite a bit.",
        "There is also a vast amount of resources when it comes to working within a community like-minded people that are willing to share.",
        "When you’re a business owner going at it alone or even just with your own very small team, it can quickly feel like you’re on your own or your struggles are insurmountable. And that’s one of the many benefits of being surrounded by a community of fellow business owners. They’ve been where you’ve been or they are where you are and so you feel less alone and more like you can take on what the future holds.",
      ],
      author: "Angel Hepp",
      role: "Founder, Josephine & Grace",
    },
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 1 + stories.length) % stories.length
    );
  };

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  useEffect(() => {
    // Generate a session ID if not present
    let sessionId = sessionStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2);
      sessionStorage.setItem("sessionId", sessionId);
    }

    // Calculate load time (approximate, using navigation timing)
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;

    // Determine device type
    const isMobile = window.innerWidth <= 768;
    const deviceType = isMobile ? "mobile" : "desktop";

    // Extract search query from referrer if from a search engine
    const searchQuery =
      document.referrer.includes("google.com") ||
      document.referrer.includes("bing.com")
        ? new URL(document.referrer).searchParams.get("q") || ""
        : "";

    const baseUrl = import.meta.env.DEV
      ? "http://localhost:4000"
      : "https://website-servers.onrender.com";

    fetch(`${baseUrl}/lbc/metrics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "page_view",
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        page: window.location.pathname,
        sessionId,
        loadTime,
        deviceType,
        connectionType:
          (navigator as any).connection?.effectiveType || "unknown",
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        searchQuery,
      }),
    });
  }, []);

  // Color Palette extraction
  const colors = {
    beige: "#F1EDE6", // Main light background
    dark: "#121212", // Main dark background
    orange: "#F5A623", // Highlight text
    red: "#D47558", // Headers
    brightRed: "#E05757", // New accent red
    blueGrey: "#A3B8B0", // Accents
    textDark: "#283655",
    blueLink: "#3C66F4",
  };

  // Reusable Components
  const Section = ({
    className,
    children,
    id,
  }: {
    className?: string;
    children: React.ReactNode;
    id?: string;
  }) => (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );

  const ThreadStrip = () => (
    <div className="w-full">
      <img
        src="/Assets/thread_image.png"
        alt="Colorful thread decorative divider"
        className="w-full h-auto max-h-5 object-cover block"
      />
    </div>
  );

  const methodologyItems: {
    image?: string;
    icon?: any;
    title: string;
    text: string;
  }[] = [
    {
      image: "/Assets/Education_button.png",
      title: "EDUCATION",
      text: "Empower your business with access to workshops: from financial fluency to marketing mastery, access programs built around what you want to learn, designed and led by community experts.",
    },
    {
      image: "/Assets/Community_button.png",
      title: "CONNECTION",
      text: "Collaboration is our greatest currency. Work side-by-side with other entrepreneurs for peer-to-peer learning and mentorship. Enggage in events that create real opportunities for growth and partnership",
    },
    {
      image: "/Assets/Recong_button.png",
      title: "RECOGNITION",
      text: "Celebrate local success and elevate your brand. Through spotlights, showcases, and shared storytelling, ensure your wins don’t go unnoticed - because your success fuels our entire community.",
    },
  ];

  return (
    <div
      className="font-sans antialiased text-[#121212]"
      style={{ backgroundColor: colors.beige }}
    >
      {/* Navigation */}
      <SiteNav />

      {/* New Top Hero Section */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden flex items-center justify-center bg-[#121212]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        >
          <source
            src="/Assets/7792548-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <img
          src="/Assets/Website cover photo.png"
          alt="LBC Threads with Logo"
          className={`relative z-10 max-w-[80%] md:max-w-full max-h-[80%] md:max-h-full object-contain transition-all duration-[2000ms] ease-out ${
            heroLoaded
              ? "opacity-90 scale-125 md:scale-150 blur-0"
              : "opacity-0 scale-110 blur-sm"
          }`}
        />
      </div>

      {/* Hero Section (Image 2) */}
      <header
        id="about"
        className="relative flex items-center overflow-hidden py-8 md:py-0 md:min-h-[600px]"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                <span style={{ color: colors.orange }}>
                  Entrepreneurs are the{" "}
                </span>
                <span style={{ color: colors.blueGrey }}>threads</span>
                <span style={{ color: colors.orange }}>
                  {" "}
                  that hold the fabric of a town together
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-6 md:mb-8 max-w-lg"></p>
              <Link
                to="/join"
                className="px-8 py-3 bg-[#121212] text-white font-bold tracking-wide hover:bg-[#F5A623] transition-colors duration-300"
              >
                JOIN THE COLLABORATIVE
              </Link>
            </div>
          </div>
        </div>

        {/* Full height image on the right (1/3 width on desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Man working in industrial workshop"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      <ThreadStrip />

      {/* The Problem (Images 3 & 4) - Dark Mode */}
      <Section id="the-problem" className="bg-[#121212] text-white pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Leadership Can
                <br />
                Be Isolating
              </h2>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">
                Do You Feel The Weight of Responsibility?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Building something meaningful often feels lonely. Entrepreneurs
                face challenges such as lack of time, tools, and support. This{" "}
                <span style={{ color: "#3C66F4" }}>
                  isolation can make forward motion feel harder than it should
                </span>
                , emphasizing the need for community and connection in business.
              </p>
            </div>
            <div className="relative">
              {/* Dark Building Window Image */}
              <div className="aspect-square bg-[#121212] relative">
                <img
                  src="/Assets/BuildingLight.png"
                  alt="Lone lit window in dark building"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-[#121212] text-white pt-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-[#F4F1EA]">
                Leadership
                <br />
                Isolation
                <br />
                Has a Cost
              </h2>
            </div>
            <div className="space-y-12">
              {[
                {
                  title: "BURNOUT",
                  content: (
                    <>
                      Another year spent in isolation leads to increased stress
                      and burnout, leaving{" "}
                      <span className="text-[#3C66F4]">
                        entrepreneurs feeling drained and overwhelmed
                      </span>
                      . This cycle can stifle creativity and dminish passion for
                      their work
                    </>
                  ),
                },
                {
                  title: "PRESSURE",
                  content: (
                    <>
                      Isolation amplifies the pressure of leadership. With no
                      space to process ideas, validate direction, or share
                      responsibility,{" "}
                      <span className="text-[#3C66F4]">
                        entrepreneurs carry everything themselves leading to
                        heightened stress, second-guessing,
                      </span>{" "}
                      and a relentless sense of being on wth no relief.
                    </>
                  ),
                },
                {
                  title: "STAGNATION",
                  content: (
                    <>
                      Without proactive change, many entrepreneurs find
                      themselves stuck struggling to naviate challenges alone,
                      utlimately{" "}
                      <span className="text-[#3C66F4]">
                        missing opportinities for growth and innovation,
                      </span>{" "}
                      that collaboration provides.
                    </>
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div
                    className="w-4 h-4 mt-2 bg-[#F5A623] shrink-0"
                    style={{ backgroundColor: colors.orange }}
                  ></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <ThreadStrip />

      {/* Intro & Quote (Images 5 & 6) */}
      <section
        id="mission"
        className="relative bg-[#F4F1EA] min-h-[500px] flex items-center overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2
                className="text-5xl md:text-6xl font-bold leading-tight mb-4"
                style={{ color: colors.brightRed }}
              >
                Introducing The
                <br />
                Local Business
                <br />
                Collaborative
              </h2>
              <h3 className="font-bold tracking-widest uppercase mb-6 text-[#121212]">
                A Community for Entrepreneurs
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                The LBC is a nurturing environment where entrepreneurs unite,
                share experiences, and pursue growth together,{" "}
                <span className="font-bold">
                  transforming challenges into opportunities for success.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Full height image on the right (1/3 width on desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full">
          <img
            src="/Assets/lbcquilt.png"
            alt="LBC Quilt"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <ThreadStrip />

      {/* Methodology (Image 7) */}
      <div className="relative py-20">
        {/* Background Image */}
        <img
          src="/Assets/Background_1.png?v=3"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative container mx-auto px-6">
          <h2
            className="text-5xl font-bold mb-16 text-center md:text-left"
            style={{ color: "#D47558" }}
          >
            A Clear Path to
            <br />
            Growth and Success
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologyItems.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-[#F5A623] p-8 flex flex-col items-center text-center bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#F5A623] rounded flex items-center justify-center text-white mb-6 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <item.icon size={32} />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ThreadStrip />

      {/* How to Be Involved — list of collaborator types (no boxes) */}
      <div className="bg-[#F4F1EA]">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            style={{ color: "#D47558" }}
          >
            How to Be Involved at The LBC
          </h2>

          <div className="max-w-3xl mx-auto space-y-10">
            <div className="border-l-4 border-[#F5A623] pl-6">
              <h3 className="text-2xl font-bold mb-2 text-[#121212]">
                Local Collaborator
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A Carbon Valley business leader who regularly takes part in the
                LBC without renting office space. They register, they show up,
                they build relationships, and they contribute.
              </p>
            </div>

            <div className="border-l-4 border-[#F5A623] pl-6">
              <h3 className="text-2xl font-bold mb-2 text-[#121212]">
                Core Collaborator
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A business owner who has made the LBC the home for their business
                through a private office, semi-private desk, or hot desk. They
                anchor the community: the calendar, the culture, and the room.
              </p>
            </div>

            <div className="border-l-4 border-[#F5A623] pl-6">
              <h3 className="text-2xl font-bold mb-2 text-[#121212]">
                Special Collaborator
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A business leader who owns or works in a business outside of the
                Carbon Valley region but still wants to help provide education,
                connection, and recognition to local businesses.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/join"
              className="inline-block px-8 py-3 bg-[#121212] text-white font-bold tracking-wide hover:bg-[#F5A623] transition-colors duration-300"
            >
              JOIN HERE
            </a>
          </div>
        </div>
      </div>
      <ThreadStrip />

      {/* Transformation (Image 8) */}
      <div className="bg-[#F4F1EA]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 py-16 px-6 md:px-16 lg:pl-32">
            <h2 className="text-5xl font-bold mb-12">
              <span style={{ color: colors.orange }}>
                Who You
                <br />
                Become
              </span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-4 h-4 mt-2 bg-[#F5A623] shrink-0"></div>
                <div>
                  <h4 className="font-bold uppercase mb-2">Connected</h4>
                  <p className="text-gray-700">
                    Inside the LBC, you'll transition from feeling isolated to
                    becoming part of a supportive network, where collaboration
                    and community drive your growth and success.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-4 h-4 mt-2 bg-[#F5A623] shrink-0"></div>
                <div>
                  <h4 className="font-bold uppercase mb-2">Empowered</h4>
                  <p className="text-gray-700">
                    Experience a shift from overwhelmed to empowered, as the LBC
                    provides the tools and resources needed to navigate
                    challenges and move forward with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 w-full justify-center lg:self-end">
            <img
              src="/Assets/whoyoubecome.png"
              alt="Happy diverse group working"
              className="w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
      <ThreadStrip />

      {/* Stories / Testimonial (Image 9) */}
      <section
        id="stories"
        className="flex flex-col lg:flex-row bg-[#F4F1EA] min-h-[350px]"
      >
        {/* Image Section - 1/3 width on desktop, full on mobile */}
        <div className="lg:w-1/3 w-full relative min-h-[350px] lg:min-h-auto group">
          <img
            key={currentStoryIndex}
            src={stories[currentStoryIndex].image}
            alt={stories[currentStoryIndex].author}
            className={`absolute inset-0 w-full h-full object-cover animate-fade-in ${stories[currentStoryIndex].alignment}`}
          />
          {/* Navigation Buttons */}
          <div className="absolute bottom-0 right-0 flex z-10">
            <button
              onClick={prevStory}
              className="bg-[#121212] text-white p-4 hover:bg-[#F5A623] transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextStory}
              className="bg-[#121212] text-white p-4 hover:bg-[#F5A623] transition-colors border-l border-gray-800"
              aria-label="Next story"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Content Section - 2/3 width on desktop */}
        <div className="lg:w-2/3 w-full py-8 px-6 md:px-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span style={{ color: colors.orange }}>
              Inspiring Stories from
              <br />
              Our Local Leaders
            </span>
          </h2>

          <div className="space-y-6 text-gray-800 text-lg leading-relaxed min-h-[350px]">
            {stories[currentStoryIndex].quotes.map((quote, idx) => (
              <p key={idx} className="animate-fade-in">
                "{quote}"
              </p>
            ))}
          </div>

          <div className="mt-8 font-bold text-sm uppercase tracking-wide animate-fade-in">
            - {stories[currentStoryIndex].author}
            <br />
            <span className="text-gray-600 font-normal normal-case">
              {stories[currentStoryIndex].role}
            </span>
          </div>
        </div>
      </section>
      <ThreadStrip />

      {/* Community Grid (Image 10) */}
      <Section id="community" className="bg-[#F4F1EA]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2
                className="text-5xl font-bold leading-tight sticky top-32"
                style={{ color: colors.orange }}
              >
                Why Be Part
                <br />
                of the LBC
                <br />
                Community?
              </h2>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "WORKSHOPS",
                  desc: "Engaging sessions to enhance your skills.",
                  img: "/Assets/Workshops.png",
                },
                {
                  title: "PEER CIRCLES",
                  desc: "Connect with fellow entrepreneurs for support.",
                  img: "/Assets/Peer Circles.png",
                },
                {
                  title: "STRATEGIC SESSIONS",
                  desc: "Tailored guidance from experienced mentors.",
                  img: "/Assets/Strategic Sessions.png",
                },
                {
                  title: "RECOGNITION",
                  desc: "Celebrate your achievements within the community.",
                  img: "/Assets/Recognition.png",
                },
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-[4/3] mb-4 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <ThreadStrip />

      {/* Footer */}
      <SiteFooter />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default LbcWebsite;
