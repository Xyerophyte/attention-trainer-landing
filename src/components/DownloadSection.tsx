'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Download, 
  Chrome, 
  Github, 
  CheckCircle, 
  FileText, 
  Shield, 
  Zap, 
  Users,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react'
import { downloadFile, formatBytes } from '@/lib/utils'

const DownloadSection = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const handleDirectDownload = async () => {
    setIsDownloading(true)
    setDownloadProgress(0)

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          downloadFile('attention-trainer-extension.zip', '/downloads/attention-trainer-extension.zip')
          return 100
        }
        return prev + 10
      })
    }, 100)
  }

  const copyInstallCommand = async () => {
    const command = "1. Extract ZIP file\n2. Open Chrome → Extensions\n3. Enable Developer Mode\n4. Click 'Load unpacked'\n5. Select extracted folder"
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadOptions = [
    {
      id: 'direct',
      title: 'Direct Download',
      description: 'Download the extension package directly',
      icon: Download,
      primary: true,
      size: '33 KB',
      action: handleDirectDownload,
      badge: 'Recommended',
      features: ['Instant access', 'No account needed', 'Works offline']
    },
    {
      id: 'chrome-store',
      title: 'Chrome Web Store',
      description: 'One-click install from official Chrome Web Store',
      icon: Chrome,
      primary: true, // Make this primary when available
      size: 'One Click',
      action: () => {
        // Check if Chrome Web Store is available
        if (typeof chrome !== 'undefined' && chrome.webstore) {
          // This would work if hosted on Chrome Web Store
          chrome.webstore.install(
            'your-extension-id', 
            () => console.log('Installed successfully'),
            (error) => {
              console.log('Installation failed:', error)
              // Fallback to manual download
              handleDirectDownload()
            }
          )
        } else {
          // For now, redirect to preparation page
          window.open('https://chrome.google.com/webstore/search/attention%20trainer', '_blank')
        }
      },
      badge: 'Submitting Soon',
      features: ['One-click install', 'Automatic updates', 'Verified by Google']
    },
    {
      id: 'github',
      title: 'GitHub Repository',
      description: 'View source code and contribute',
      icon: Github,
      primary: false,
      size: 'Open Source',
      action: () => window.open('https://github.com', '_blank'),
      badge: 'For Developers',
      features: ['Full source code', 'Issue tracking', 'Contribute']
    }
  ]

  const installSteps = [
    {
      step: 1,
      title: 'Download Extension',
      description: 'Download the ZIP file (33KB)',
      icon: Download,
      time: '10 seconds'
    },
    {
      step: 2,
      title: 'Extract Files',
      description: 'Unzip to any folder on your computer',
      icon: FileText,
      time: '5 seconds'
    },
    {
      step: 3,
      title: 'Open Chrome Extensions',
      description: 'Go to chrome://extensions/',
      icon: Chrome,
      time: '5 seconds'
    },
    {
      step: 4,
      title: 'Load Extension',
      description: 'Enable Developer Mode and click "Load unpacked"',
      icon: CheckCircle,
      time: '10 seconds'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: '100% Privacy Protected',
      description: 'All data stored locally, never transmitted'
    },
    {
      icon: Zap,
      title: 'Instant Activation',
      description: 'Works immediately after installation'
    },
    {
      icon: Users,
      title: '10,000+ Users',
      description: 'Trusted by productivity enthusiasts'
    }
  ]

  return (
    <section id="download" ref={containerRef} className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle className="w-4 h-4" />
            Ready to Download
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Get Started in 30 Seconds
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred installation method and start transforming your browsing habits today.
          </p>
        </motion.div>

        {/* Download Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {downloadOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                option.primary 
                  ? 'border-blue-500 shadow-blue-100' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, shadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
            >
              {/* Badge */}
              {option.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium ${
                  option.primary 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : option.badge === 'Coming Soon' 
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-600 text-white'
                }`}>
                  {option.badge}
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  option.primary 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gray-100'
                }`}>
                  <option.icon className={`w-8 h-8 ${option.primary ? 'text-white' : 'text-gray-600'}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                <div className="text-sm text-gray-500 mb-6">
                  Size: <span className="font-medium">{option.size}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {option.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  onClick={option.action}
                  disabled={option.id === 'direct' && isDownloading}
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    option.primary
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : option.badge === 'Coming Soon'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={option.badge !== 'Coming Soon' ? { scale: 1.02 } : {}}
                  whileTap={option.badge !== 'Coming Soon' ? { scale: 0.98 } : {}}
                >
                  {option.id === 'direct' && isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Downloading... {downloadProgress}%
                    </>
                  ) : (
                    <>
                      <option.icon className="w-5 h-5" />
                      {option.badge === 'Coming Soon' ? 'Coming Soon' : `Get ${option.title}`}
                      {option.id !== 'direct' && <ExternalLink className="w-4 h-4" />}
                    </>
                  )}
                </motion.button>

                {/* Progress Bar for Direct Download */}
                {option.id === 'direct' && isDownloading && (
                  <motion.div
                    className="w-full bg-gray-200 rounded-full h-2 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${downloadProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Installation Guide */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Installation Guide</h3>
              <p className="text-gray-600">Simple 4-step process, takes less than 30 seconds</p>
            </div>
            <motion.button
              onClick={copyInstallCommand}
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Steps'}
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <step.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  
                  <div className="text-xs text-blue-600 font-medium">
                    ⏱️ {step.time}
                  </div>
                </div>

                {/* Connection Line */}
                {index < installSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-600 mb-6">
            Still have questions? Check out our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">documentation</a> or{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">contact support</a>.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Virus-free guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>30-day satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-500" />
              <span>10,000+ happy users</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadSection
