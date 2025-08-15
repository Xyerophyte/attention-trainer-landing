'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  Eye, 
  BarChart3, 
  Settings, 
  Shield, 
  Timer, 
  Brain,
  MousePointer,
  Zap,
  TrendingUp,
  Filter
} from 'lucide-react'

const FeaturesSection = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  const features = [
    {
      icon: Eye,
      title: "Smart Scroll Detection",
      description: "AI-powered detection of doom scrolling patterns with real-time monitoring across all websites.",
      color: "from-blue-500 to-cyan-500",
      demo: "scroll-detection",
      details: [
        "Real-time scroll velocity analysis",
        "Pattern recognition algorithms", 
        "Cross-domain monitoring",
        "Intelligent filtering system"
      ]
    },
    {
      icon: Zap,
      title: "Progressive Interventions",
      description: "Four-stage intervention system that gradually increases intensity to break scrolling habits.",
      color: "from-purple-500 to-pink-500",
      demo: "interventions",
      details: [
        "Stage 1: Subtle screen dimming",
        "Stage 2: Content blur effects",
        "Stage 3: Motivational overlays",
        "Stage 4: Temporary scroll lock"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into your browsing habits with beautiful charts and actionable recommendations.",
      color: "from-green-500 to-emerald-500",
      demo: "analytics",
      details: [
        "Daily & weekly scroll time tracking",
        "Site-by-site breakdown analysis",
        "Intervention effectiveness metrics",
        "Visual trend analysis"
      ]
    },
    {
      icon: Settings,
      title: "Full Customization",
      description: "Tailor the experience to your needs with extensive customization options and focus modes.",
      color: "from-orange-500 to-red-500",
      demo: "settings",
      details: [
        "Adjustable intervention thresholds",
        "Whitelist/blacklist management",
        "Focus session timers",
        "Personalized nudge messages"
      ]
    }
  ]

  const demoComponents = {
    'scroll-detection': () => (
      <div className="bg-gray-900 rounded-lg p-4 text-white text-xs font-mono">
        <div className="mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Scroll Monitor Active</span>
        </div>
        <div className="space-y-1">
          <div>Velocity: <span className="text-blue-400">1,247px/s</span></div>
          <div>Duration: <span className="text-yellow-400">23.4s</span></div>
          <div>Pattern: <span className="text-red-400">Infinite Scroll</span></div>
          <motion.div
            className="w-full bg-gray-700 rounded-full h-1 mt-2"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="bg-blue-400 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    ),
    'interventions': () => (
      <div className="space-y-2">
        {['Dimming', 'Blur', 'Overlay', 'Lock'].map((stage, i) => (
          <motion.div
            key={stage}
            className={`flex items-center gap-3 p-2 rounded-lg ${i <= 1 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
          >
            <div className={`w-2 h-2 rounded-full ${i <= 1 ? 'bg-green-500' : 'bg-gray-400'}`} />
            <span className="text-sm font-medium">Stage {i + 1}: {stage}</span>
            {i <= 1 && (
              <motion.div
                className="ml-auto w-4 h-4 border-2 border-green-500 rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
    ),
    'analytics': () => (
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-800">Today's Activity</h4>
          <TrendingUp className="w-4 h-4 text-green-500" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Scroll Time</span>
            <span className="font-medium">2h 34m</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Interventions</span>
            <span className="font-medium text-blue-600">12 prevented</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "68%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    ),
    'settings': () => (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Focus Mode</span>
          <div className="flex space-x-1">
            <div className="w-6 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Intervention Level</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map(level => (
              <motion.div
                key={level}
                className={`w-2 h-4 rounded ${level <= 3 ? 'bg-green-500' : 'bg-gray-300'}`}
                initial={{ height: 0 }}
                animate={{ height: level <= 3 ? 16 : 16 }}
                transition={{ delay: level * 0.1 }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Break Reminders</span>
          <motion.div
            className="w-8 h-4 bg-blue-500 rounded-full flex items-center"
            animate={{ backgroundColor: ["#3b82f6", "#10b981", "#3b82f6"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-3 h-3 bg-white rounded-full ml-0.5"
              animate={{ x: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <section id="features" ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30" />
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="w-4 h-4" />
            Intelligent Features
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Powered by Smart Technology
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our extension combines advanced behavioral psychology with cutting-edge web technology 
            to deliver personalized interventions that actually work.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const DemoComponent = demoComponents[feature.demo as keyof typeof demoComponents]
            
            return (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Feature Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 group-hover:border-gray-300/50">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  {/* Feature Details */}
                  <div className="space-y-3 mb-6">
                    {feature.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Demo */}
                  <motion.div
                    className="bg-gray-50/50 rounded-xl p-4 border border-gray-200/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MousePointer className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Live Preview</span>
                    </div>
                    <DemoComponent />
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full opacity-20 blur-sm`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience these powerful features?
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Try It Now - Free Download
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturesSection
