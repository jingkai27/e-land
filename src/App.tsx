import React, { useState } from 'react';
import { Camera, Share2, Smartphone, Cloud, Mail, ChevronDown, Instagram, Facebook, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeStorySlide, setActiveStorySlide] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    setEmail('');
    alert('Thanks for signing up! We\'ll keep you posted.');
  };

  // Define the slides array for the carousel
  const slides = [
    {
      image: "/images/couple-selfie.png",
      alt: "Couple taking selfie with phone",
      text: "take 4 pictures with your phone"
    },
    {
      image: "/images/photostrip-result.png",
      alt: "Photostrip result on phone",
      text: "get a photostrip automatically generated for you"
    },
    {
      image: "/images/print-photos.png",
      alt: "Printed photostrips",
      text: "order physical prints directly from the app"
    }
  ];

  return (
    <div className="min-h-screen bg-cream font-caslon">
      {/* Sticky Navigation */}
      <nav className="fixed w-full bg-cream/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <div className="flex items-center">
              <span className="ml-6 text-xl font-bold text-neutral-600 font-annabel">Euphoria</span>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`h-6 w-6 text-sage transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-sage font-medium">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-sage font-medium">Pricing</a>
              <a href="#faq" className="block px-3 py-2 text-sage font-medium">FAQ</a>
              <a href="#contact" className="block px-3 py-2 text-sage font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background.png"
            alt="People enjoying outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <p className="text-xl md:text-2xl font-light mb-4 font-aesthet">capture more for less.</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 font-aesthet">project: euphoria</h1>

          {/* Email Sign Up */}
          <div className="mt-20">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-sage focus:border-sage w-full sm:w-auto min-w-[300px] font-aesthet"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-sage text-white font-medium rounded-md hover:bg-sage/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage font-aesthet"
              >
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Story Carousel Section */}
      <section className="py-16 bg-[#E8E1D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-sage font-aesthet">the story begins here:</h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeStorySlide * 100}%)` }}
              >
                {/* First slide */}
                <div className="w-full flex-none md:flex items-center justify-center gap-8 min-w-full">
                  <div className="bg-white p-4 rounded-lg shadow-md mb-6 md:mb-0 md:w-1/2">
                    <img
                      src="/images/photobooth-group.png"
                      alt="People in a photobooth"
                      className="w-full h-auto rounded"
                    />
                    <p className="mt-4 text-center text-sage font-caslon">
                      the photobooth experience is becoming increasingly popular
                    </p>
                  </div>
                </div>

                {/* Second slide */}
                <div className="w-full flex-none md:flex items-center justify-center gap-8 min-w-full">
                  <div className="bg-white p-4 rounded-lg shadow-md md:w-1/2">
                    <div className="relative">
                      <img
                        src="/images/photobooth-line.png"
                        alt="People waiting in line for photobooth"
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <p className="mt-4 text-center text-sage font-caslon">
                      but the experience is stressful and limited by space and time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors w-8 h-8 flex items-center justify-center"
              onClick={() => setActiveStorySlide(prev => prev === 0 ? 1 : 0)}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-neutral" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors w-8 h-8 flex items-center justify-center"
              onClick={() => setActiveStorySlide(prev => prev === 1 ? 0 : 1)}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-neutral" />
            </button>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setActiveStorySlide(0)}
                className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${activeStorySlide === 0 ? 'bg-sage w-5' : 'bg-sage/30'}`}
                aria-label="Go to slide 1"
              />
              <button
                onClick={() => setActiveStorySlide(1)}
                className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${activeStorySlide === 1 ? 'bg-sage w-5' : 'bg-sage/30'}`}
                aria-label="Go to slide 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* So What If Section */}
      <section className="py-16 bg-[#E9E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral font-aesthet">so what if?</h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel container */}
            <div className="overflow-hidden px-4">
              <div
                className="flex transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full flex justify-center items-center">
                    <div className="max-w-[350px] bg-white p-4 rounded-lg shadow-md">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-auto rounded transition-all"
                      />
                      <p className="mt-4 text-center text-sm font-caslon">
                        {slide.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors w-8 h-8 flex items-center justify-center"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-neutral" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors w-8 h-8 flex items-center justify-center"
              onClick={() => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-neutral" />
            </button>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${activeSlide === index ? 'bg-neutral w-5' : 'bg-neutral/30'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sage font-aesthet">
              Retro charm meets modern tech
            </h2>
            <p className="mt-4 text-lg text-sage/80 font-caslon">Click on a feature to learn more</p>
          </div>

          <div className="mt-16">
            <FeatureAccordion />
          </div>
        </div>
      </section>

      {/* Versatile Event Solutions */}
      <section className="py-16 bg-[#E9E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sage font-aesthet">Perfect for Every Occasion</h2>
            <p className="mt-4 text-lg text-sage/80 max-w-2xl mx-auto font-caslon">
              Project Euphoria adapts to any event, enhancing engagement and providing customized branding opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Corporate Events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-sage mb-1 font-aesthet">Corporate Events</h3>
                <p className="text-sm text-sage/70 font-caslon">
                  Team building & branded memories
                </p>
              </div>
            </div>

            {/* Weddings */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-sage mb-1 font-aesthet">Weddings</h3>
                <p className="text-sm text-sage/70 font-caslon">
                  Elegant templates for special days
                </p>
              </div>
            </div>

            {/* Birthdays */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-sage mb-1 font-aesthet">Parties</h3>
                <p className="text-sm text-sage/70 font-caslon">
                  Fun props for all ages
                </p>
              </div>
            </div>

            {/* Festivals */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-sage mb-1 font-aesthet">Festivals</h3>
                <p className="text-sm text-sage/70 font-caslon">
                  Boost community engagement
                </p>
              </div>
            </div>

            {/* Product Launches */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-sage mb-1 font-aesthet">Marketing</h3>
                <p className="text-sm text-sage/70 font-caslon">
                  Amplify brand awareness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sage font-aesthet">Why You'll Love Euphoria</h2>
            <p className="mt-4 text-lg text-sage/80 max-w-2xl mx-auto font-caslon">
              Reduce costs by 70%, eliminate equipment hassle, and get unlimited customization options with instant social sharing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Cost Savings */}
            <div className="bg-[#F7F5F0] rounded-lg overflow-hidden p-5 hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-sage flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-sage font-aesthet">70% Cost Reduction</h3>
              </div>
              <p className="text-sm text-sage/80 font-caslon">
                No expensive equipment or staffing costs
              </p>
            </div>

            {/* No Equipment */}
            <div className="bg-[#F7F5F0] rounded-lg overflow-hidden p-5 hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-sage flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-sage font-aesthet">Zero Setup</h3>
              </div>
              <p className="text-sm text-sage/80 font-caslon">
                Uses guest smartphones—we handle the rest
              </p>
            </div>

            {/* Customization */}
            <div className="bg-[#F7F5F0] rounded-lg overflow-hidden p-5 hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-sage flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-sage font-aesthet">Fully Customizable</h3>
              </div>
              <p className="text-sm text-sage/80 font-caslon">
                Branded frames and personalized effects
              </p>
            </div>

            {/* Social Sharing */}
            <div className="bg-[#F7F5F0] rounded-lg overflow-hidden p-5 hover:shadow-md transition-all">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-sage flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-sage font-aesthet">Instant Sharing</h3>
              </div>
              <p className="text-sm text-sage/80 font-caslon">
                Direct to social media with analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-[#E9E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sage font-aesthet">Simple, transparent pricing</h2>
            <p className="mt-4 text-xl text-sage/80 font-caslon">Choose the perfect plan for your event</p>
          </div>

          <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Starter Tier */}
            <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-sage/10 text-sage font-aesthet">
                    Starter Tier
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold font-aesthet">
                  $99
                  <span className="ml-1 text-xl font-medium text-sage/70">/event</span>
                </div>
                <p className="mt-5 text-lg text-sage/80 font-caslon">
                  Basic Testing
                </p>
                <p className="mt-2 text-sm text-sage/70 font-caslon">
                  Event Duration: Up to 2 hours
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white sm:p-10">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sage font-aesthet">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-cream"></div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'QR-code enabled digital photobooth access',
                      'Standard photostrip frames (limited set)',
                      'Real-time display of photostrips on event board',
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-sage/80 font-caslon">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sage font-aesthet">
                        Limitations
                      </h4>
                      <div className="flex-1 border-t-2 border-cream"></div>
                    </div>
                    <ul className="mt-4 space-y-4">
                      {[
                        'Standard branding only (logo included)',
                        'Up to 30 concurrent users',
                      ].map((limitation) => (
                        <li key={limitation} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-sage/50" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-sage/70 font-caslon">{limitation}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full px-6 py-3 border border-sage text-center rounded-md shadow-sm text-sage bg-white hover:bg-sage/5 font-aesthet"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>

            {/* Growth Tier */}
            <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white border-2 border-sage">
              <div className="absolute top-0 right-0 m-4">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-sage text-white font-aesthet">
                  Most Popular
                </span>
              </div>
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-sage/20 text-sage font-aesthet">
                    Growth Tier
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold font-aesthet">
                  $199
                  <span className="ml-1 text-xl font-medium text-sage/70">/event</span>
                </div>
                <p className="mt-5 text-lg text-sage/80 font-caslon">
                  Enhanced Testing
                </p>
                <p className="mt-2 text-sm text-sage/70 font-caslon">
                  Event Duration: Up to 4 hours
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white sm:p-10">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sage font-aesthet">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-cream"></div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Everything in Starter Tier, plus:',
                      'Custom branding (event organizer\'s logos or sponsor messages)',
                      'Personalized messaging attached to photostrips',
                      'Expanded selection of frames and digital props',
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-sage/80 font-caslon">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sage font-aesthet">
                        Limitations
                      </h4>
                      <div className="flex-1 border-t-2 border-cream"></div>
                    </div>
                    <ul className="mt-4 space-y-4">
                      {[
                        'Up to 75 concurrent users',
                      ].map((limitation) => (
                        <li key={limitation} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-sage/50" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-sage/70 font-caslon">{limitation}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full px-6 py-3 text-center rounded-md shadow-sm text-white bg-sage hover:bg-sage/90 font-aesthet"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-sage/10 text-sage font-aesthet">
                    Premium Tier
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold font-aesthet">
                  $299
                  <span className="ml-1 text-xl font-medium text-sage/70">/event</span>
                </div>
                <p className="mt-5 text-lg text-sage/80 font-caslon">
                  Full Feature Validation
                </p>
                <p className="mt-2 text-sm text-sage/70 font-caslon">
                  Event Duration: Full-day access (up to 8 hours)
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white sm:p-10">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sage font-aesthet">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-cream"></div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Everything in Growth Tier, plus:',
                      'Unlimited branding and customization options',
                      'Advanced analytics (user interactions, engagement metrics)',
                      'Post-event digital gallery delivered via email',
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-sage/80 font-caslon">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sage font-aesthet">
                        Limitations
                      </h4>
                      <div className="flex-1 border-t-2 border-cream"></div>
                    </div>
                    <ul className="mt-4 space-y-4">
                      {[
                        'Up to 150 concurrent users',
                      ].map((limitation) => (
                        <li key={limitation} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-sage/50" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-sage/70 font-caslon">{limitation}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full px-6 py-3 border border-sage text-center rounded-md shadow-sm text-sage bg-white hover:bg-sage/5 font-aesthet"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sage font-aesthet">Frequently asked questions</h2>
          </div>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {[
                {
                  question: "When will the app launch?",
                  answer: "We're targeting a summer 2024 launch. Sign up for early access to be the first to know!"
                },
                {
                  question: "Do I need special equipment?",
                  answer: "Nope! Just your smartphone and our app. We'll handle the rest."
                },
                {
                  question: "Can I print my photostrips?",
                  answer: "Yes! You can order professional prints directly through the app or export for printing anywhere."
                },
                {
                  question: "Is there a limit to how many photos I can take?",
                  answer: "None at all! Take as many photostrips as you'd like."
                }
              ].map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-sage font-caslon">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-sage/80 font-caslon">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-sage font-caslon">Get in touch</h2>
            <p className="mt-4 text-lg text-sage/80 font-caslon">
              Questions? We're here to help!
            </p>
          </div>
          <div className="mt-12 text-center">
            <a
              href="mailto:support@snapstrip.app"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sage hover:bg-sage/90 font-caslon"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-sage hover:text-dusty">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-sage hover:text-dusty">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-sage hover:text-dusty">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center text-base text-sage/70 font-caslon">
            &copy; 2025 project: euphoria. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureAccordion = () => {
  // Default to first feature (0)
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      title: "Create wherever you are",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      description: "Take the photo booth experience with you anywhere. Use your phone to capture special moments at parties, weddings, road trips, or casual hangouts. No bulky equipment or special setup needed - just your smartphone and our app."
    },
    {
      title: "Got it wrong? Retake",
      icon: <Camera className="h-6 w-6 text-white" />,
      description: "Unlike traditional photo booths, you're in complete control. Not happy with a shot? Simply retake it. Our app lets you review each photo and decide whether to keep it or try again, ensuring your photostrips are perfect every time."
    },
    {
      title: "Got a favourite? Print it out (coming soon)",
      icon: <Share2 className="h-6 w-6 text-white" />,
      description: "Transform digital memories into physical keepsakes. Soon you'll be able to order professional-quality prints of your favorite photostrips directly through the app. Perfect for scrapbooks, wall displays, or thoughtful gifts."
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Feature tabs in a row */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {features.map((feature, index) => (
          <button
            key={index}
            className={`flex items-center px-5 py-3 rounded-full border-2 transition-all duration-200 font-caslon ${activeFeature === index
              ? 'bg-sage text-white border-sage'
              : 'bg-cream text-sage border-sage/30 hover:border-sage'
              }`}
            onClick={() => setActiveFeature(index)}
          >
            <span className="mr-2">{feature.icon}</span>
            <span className="font-medium">{feature.title}</span>
          </button>
        ))}
      </div>

      {/* Feature content */}
      <div className="w-full max-w-2xl bg-cream rounded-lg shadow-lg p-6 min-h-[200px] transition-all duration-300">
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center justify-center p-3 bg-sage rounded-md shadow-lg mr-4">
            {features[activeFeature].icon}
          </span>
          <h3 className="text-xl font-medium text-sage font-caslon">
            {features[activeFeature].title}
          </h3>
        </div>
        <p className="text-sage/80 text-lg font-caslon">
          {features[activeFeature].description}
        </p>
      </div>
    </div>
  );
};

export default App;