'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, Monitor, Smartphone, Tablet } from 'lucide-react'

const InteractiveDemoSection = () => {
  const [currentDemo, setCurrentDemo] = useState('popup')
  const [isPlaying, setIsPlaying] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const demos = [
    { 
      id: 'popup', 
      name: 'Extension Popup', 
      icon: Monitor,
      description: 'Control center for managing your attention'
    },
    { 
      id: 'intervention', 
      name: 'Smart Interventions', 
      icon: Smartphone,
      description: 'See how the extension prevents doom scrolling'
    },
    { 
      id: 'analytics', 
      name: 'Analytics Dashboard', 
      icon: Tablet,
      description: 'Track your progress and insights'
    }
  ]

  const popupSteps = [
    { title: 'Extension loads', description: 'Click the extension icon' },
    { title: 'Status check', description: 'See your current activity' },
    { title: 'Quick actions', description: 'Toggle settings instantly' },
    { title: 'View analytics', description: 'Access detailed insights' }
  ]

  const interventionSteps = [
    { title: 'Scrolling detected', description: 'User starts infinite scrolling' },
    { title: 'Stage 1: Dimming', description: 'Subtle screen opacity reduction' },
    { title: 'Stage 2: Blur', description: 'Content becomes slightly blurred' },
    { title: 'Stage 3: Nudge', description: 'Motivational overlay appears' }
  ]

  const analyticsSteps = [
    { title: 'Dashboard opens', description: 'Beautiful charts and metrics' },
    { title: 'Weekly overview', description: 'Track your progress over time' },
    { title: 'Site breakdown', description: 'See where you spend most time' },
    { title: 'Insights', description: 'Get personalized recommendations' }
  ]

  const getSteps = () => {
    switch (currentDemo) {
      case 'popup': return popupSteps
      case 'intervention': return interventionSteps
      case 'analytics': return analyticsSteps
      default: return popupSteps
    }
  }

  const startDemo = () => {
    setIsPlaying(true)
    setDemoStep(0)
    const steps = getSteps()
    let currentStep = 0
    
    const interval = setInterval(() => {
      currentStep++
      if (currentStep >= steps.length) {
        setIsPlaying(false)
        clearInterval(interval)
      } else {
        setDemoStep(currentStep)
      }
    }, 2000)
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setDemoStep(0)
  }

  const renderDemoContent = () => {
    switch (currentDemo) {
      case 'popup':
        return (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 mx-auto">
            {/* Extension Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Attention Trainer</h3>
                  <p className="text-xs opacity-90">Focus Mode: Active</p>
                </div>
                <motion.div
                  className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="p-4 border-b border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold text-blue-600"
                    animate={demoStep >= 1 ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    2h 34m
                  </motion.div>
                  <div className="text-xs text-gray-600">Today</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold text-green-600"
                    animate={demoStep >= 1 ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    12
                  </motion.div>
                  <div className="text-xs text-gray-600">Prevented</div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 space-y-3">
              <motion.div 
                className="flex items-center justify-between"
                animate={demoStep >= 2 ? { backgroundColor: '#dbeafe' } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium">Focus Mode</span>
                <motion.div 
                  className="w-10 h-6 bg-blue-600 rounded-full flex items-center px-1"
                  animate={demoStep >= 2 ? { backgroundColor: '#10b981' } : {}}
                >
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full"
                    animate={demoStep >= 2 ? { x: 16 } : { x: 0 }}
                  />
                </motion.div>
              </motion.div>

              <motion.button 
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={demoStep >= 3 ? { 
                  backgroundColor: '#3b82f6', 
                  color: '#ffffff' 
                } : {}}
              >
                View Analytics Dashboard
              </motion.button>
            </div>
          </div>
        )

      case 'intervention':
        return (
          <div className="relative w-full max-w-lg mx-auto">
            {/* Simulated Website */}
            <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 border-b flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-600">
                  instagram.com/explore
                </div>
              </div>
              
              <motion.div 
                className="h-96 bg-gradient-to-b from-pink-50 to-purple-50 p-4 relative overflow-hidden"
                animate={
                  demoStep >= 1 ? { opacity: 0.7 } : 
                  demoStep >= 2 ? { filter: 'blur(2px)' } : {}
                }
                transition={{ duration: 1 }}
              >
                {/* Fake content */}
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      className="bg-white rounded-lg p-3 shadow-sm"
                      animate={{ y: demoStep >= 0 ? [-10, 10, -10] : 0 }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
                        <div className="h-4 bg-gray-200 rounded flex-1" />
                      </div>
                      <div className="h-24 bg-gradient-to-r from-blue-200 to-purple-200 rounded mb-2" />
                      <div className="flex gap-1">
                        <div className="h-2 bg-gray-200 rounded flex-1" />
                        <div className="h-2 bg-gray-200 rounded w-16" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Intervention Overlay */}
                <AnimatePresence>
                  {demoStep >= 3 && (
                    <motion.div
                      className="absolute inset-0 bg-blue-600/90 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <div className="text-center text-white p-8">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-xl font-bold mb-2">Take a Break! 🌟</h3>
                          <p className="mb-4">You&apos;ve been scrolling for 5 minutes.</p>
                          <p className="text-sm opacity-90">
                            Maybe it&apos;s time to focus on something important?
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        )

      case 'analytics':
        return (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-2xl mx-auto">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Focus Analytics</h3>
              <p className="text-gray-600">Track your digital wellness journey</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <motion.div 
                  className="text-center p-4 bg-blue-50 rounded-lg"
                  animate={demoStep >= 1 ? { scale: [1, 1.05, 1] } : {}}
                >
                  <div className="text-2xl font-bold text-blue-600">2h 34m</div>
                  <div className="text-sm text-gray-600">Focus Time Today</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-green-50 rounded-lg"
                  animate={demoStep >= 1 ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-purple-50 rounded-lg"
                  animate={demoStep >= 1 ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Interventions</div>
                </motion.div>
              </div>

              {/* Chart Area */}
              <motion.div 
                className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-6 relative overflow-hidden"
                animate={demoStep >= 2 ? { opacity: 1 } : { opacity: 0.3 }}
              >
                <div className="absolute inset-0 flex items-end justify-around p-4">
                  {[65, 78, 45, 89, 67, 82, 74].map((height, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                      style={{ width: '12px' }}
                      initial={{ height: 0 }}
                      animate={demoStep >= 2 ? { height: `${height}%` } : {}}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Insights */}
              <motion.div 
                className="space-y-3"
                animate={demoStep >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm font-medium">Most Active Time</span>
                  <span className="text-sm text-yellow-700">2:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-sm font-medium">Top Distraction Site</span>
                  <span className="text-sm text-red-700">instagram.com (45 min)</span>
                </div>
              </motion.div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="demo" ref={containerRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              See It In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how Attention Trainer works with our interactive demos
          </p>
        </motion.div>

        {/* Demo Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {demos.map((demo) => (
            <motion.button
              key={demo.id}
              onClick={() => {
                setCurrentDemo(demo.id)
                setDemoStep(0)
                setIsPlaying(false)
              }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentDemo === demo.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <demo.icon className="w-5 h-5" />
              <div className="text-left">
                <div className="text-sm font-semibold">{demo.name}</div>
                <div className="text-xs opacity-75">{demo.description}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Demo Content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            {renderDemoContent()}
          </div>
        </motion.div>

        {/* Demo Controls */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <motion.button
              onClick={isPlaying ? () => setIsPlaying(false) : startDemo}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? 'Pause Demo' : 'Start Demo'}
            </motion.button>
            
            <motion.button
              onClick={resetDemo}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </motion.button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2">
            {getSteps().map((step, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= demoStep
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Current Step Description */}
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900">
              Step {demoStep + 1}: {getSteps()[demoStep]?.title}
            </div>
            <div className="text-xs text-gray-600">
              {getSteps()[demoStep]?.description}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveDemoSection
