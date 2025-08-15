'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Github, 
  Twitter, 
  Mail, 
  Heart, 
  Shield, 
  Lock,
  ExternalLink,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Demo', href: '#demo' },
      { name: 'Download', href: '#download' },
      { name: 'Testimonials', href: '#testimonials' }
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Installation Guide', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Support', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' }
    ],
    community: [
      { name: 'GitHub', href: 'https://github.com', external: true },
      { name: 'Discussions', href: 'https://github.com', external: true },
      { name: 'Bug Reports', href: 'https://github.com', external: true },
      { name: 'Feature Requests', href: 'https://github.com', external: true }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Attention Trainer
                </h3>
                <p className="text-gray-400 text-sm">Combat Doom Scrolling</p>
              </div>
            </motion.div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transform your browsing habits with intelligent interventions and behavioral insights. 
              Take control of your digital life, one scroll at a time.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Privacy First</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <Lock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Open Source</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-300">10k+ Users</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:support@attentiontrainer.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 3 }}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get notified about new features and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <span>© 2024 Attention Trainer. All rights reserved.</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Made with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> for digital wellness
              </span>
              
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
