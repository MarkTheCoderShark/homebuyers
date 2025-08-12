'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  Award,
  Users
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'How It Works', href: '#process' },
    { name: 'Get Cash Offer', href: '#lead-form' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  const serviceAreas = [
    'California',
    'Texas',
    'Florida',
    'New York',
    'Illinois',
    'Pennsylvania',
    'Ohio',
    'Georgia'
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                CashHomeBuyers
              </h3>
              <p className="text-gray-400">
                We buy houses fast for cash in any condition.
                Trusted by homeowners nationwide since 2008.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                <span>A+ BBB Rating</span>
              </div>
              <div className="flex items-center text-sm">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-2 text-blue-400" />
                <span>500+ Happy Customers</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs mt-3">+ 42 more states</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <div>
                  <a href="tel:5551234567" className="text-gray-400 hover:text-white transition-colors">
                    (555) 123-CASH
                  </a>
                  <div className="text-xs text-gray-500">Available 24/7</div>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                <div>
                  <a href="mailto:info@cashhomebuyers.com" className="text-gray-400 hover:text-white transition-colors">
                    info@cashhomebuyers.com
                  </a>
                  <div className="text-xs text-gray-500">Quick response</div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-green-400 mt-0.5" />
                <div>
                  <span className="text-gray-400">
                    123 Business Ave<br />
                    Suite 100<br />
                    Your City, ST 12345
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-green-400" />
                <div>
                  <span className="text-gray-400">Mon-Sun: 8AM-8PM</span>
                  <div className="text-xs text-gray-500">Emergency calls 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-white mb-4">
              Get Home Selling Tips
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive helpful tips and market updates for homeowners.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-green-600 hover:bg-green-700 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} CashHomeBuyers. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> We are not real estate agents or brokers.
              We are professional home buyers who purchase properties directly from homeowners.
              All offers are subject to property inspection and verification of ownership.
              Closing times may vary based on title work and other factors.
              Licensed in all states where we operate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
