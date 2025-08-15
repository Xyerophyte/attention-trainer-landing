'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, Users, TrendingUp, Award } from 'lucide-react'

const TestimonialsSection = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Designer",
      company: "TechCorp",
      avatar: "SC",
      rating: 5,
      text: "This extension completely changed how I browse. I've reclaimed 3 hours a day that I was losing to mindless scrolling. The interventions are gentle but effective.",
      highlight: "3 hours a day saved"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      company: "StartupXYZ",
      avatar: "MR",
      rating: 5,
      text: "As a developer, I appreciate the elegant implementation. The analytics dashboard gives me insights I never had before. Open source is a huge plus!",
      highlight: "Love the analytics"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Marketing Manager",
      company: "Agency Inc",
      avatar: "EW",
      rating: 5,
      text: "The progressive intervention system is brilliant. It doesn't block everything harshly but gradually guides you back to focus. Game-changer for productivity.",
      highlight: "Perfect balance"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Student",
      company: "University",
      avatar: "DK",
      rating: 5,
      text: "Finally! An extension that actually helps instead of just blocking sites. The motivational overlays keep me on track with my studies.",
      highlight: "Helped with studies"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Content Creator",
      company: "Freelance",
      avatar: "LT",
      rating: 5,
      text: "I was skeptical at first, but the data speaks for itself. My focus time increased by 85% in just two weeks. The privacy-first approach sealed the deal.",
      highlight: "85% improvement"
    },
    {
      id: 6,
      name: "Alex Patel",
      role: "Entrepreneur",
      company: "StartupABC",
      avatar: "AP",
      rating: 5,
      text: "Clean, effective, and respects my privacy. The customization options let me tailor it perfectly to my workflow. Couldn't be happier!",
      highlight: "Perfect customization"
    }
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users", color: "text-blue-600" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "text-yellow-500" },
    { icon: TrendingUp, value: "85%", label: "Success Rate", color: "text-green-500" },
    { icon: Award, value: "30 Days", label: "Money Back", color: "text-purple-600" }
  ]

  return (
    <section id="testimonials" ref={containerRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4" />
            Loved by Users
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              What People Are Saying
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who've transformed their digital habits with Attention Trainer
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring", stiffness: 400 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Highlight */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-6">
                <div className="text-sm font-semibold text-blue-700">
                  ✨ {testimonial.highlight}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join 10,000+ Happy Users?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your journey to better digital habits today. Free to download, 
            instant to install, life-changing results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download Now - Free
            </motion.button>
            
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
