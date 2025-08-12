'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Mail, MapPin, Clock, DollarSign, Home } from 'lucide-react'

export default function HeroSection() {
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    email: '',
    name: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with your lead capture system
    console.log('Lead submitted:', formData)
    // You would typically send this to your backend/CRM
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Get Cash Offer in 24 Hours
              </span>
            </div>

            <h1 className="hero-title text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Sell Your House Fast for{' '}
              <span className="text-yellow-300">Cash</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed">
              We buy homes in ANY condition. No repairs, no showings, no hassles.
              Get a fair cash offer and close in as little as 7 days.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-yellow-300" />
                <span className="font-semibold">Fair Cash Offers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3 text-yellow-300" />
                <span className="font-semibold">Close in 7 Days</span>
              </div>
              <div className="flex items-center">
                <Home className="w-6 h-6 mr-3 text-yellow-300" />
                <span className="font-semibold">Any Condition</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-yellow-300" />
                <span className="font-semibold">All 50 States</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-green-100">Homes Purchased</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-green-100">Customer Rating</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">A+</div>
                <div className="text-sm text-green-100">BBB Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-xl"
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get My Cash Offer Now
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-CASH
              </Button>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8" id="lead-form">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Cash Offer
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll contact you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="form-label">Property Address *</label>
                  <Input
                    type="text"
                    placeholder="123 Main St, City, State"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Your Name *</label>
                  <Input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cta-button text-lg py-4"
                  size="lg"
                >
                  Get My Free Cash Offer
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to receive calls and texts.
                  No obligation. We respect your privacy.
                </p>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    No Obligation
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    100% Free
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Secure & Private
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
