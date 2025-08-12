"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Home,
  FileText,
  DollarSign,
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Star,
  PlayCircle,
} from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [showFAQ, setShowFAQ] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Contact Us",
      description:
        "Call us or fill out our form with your property details. We'll schedule a convenient time to evaluate your home.",
      details: [
        "Quick 5-minute phone call",
        "No pressure consultation",
        "Flexible scheduling available",
      ],
      timeframe: "Same day response",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      number: "02",
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Property Evaluation",
      description:
        "We'll visit your property for a quick, no-obligation assessment. This usually takes 15-30 minutes.",
      details: [
        "Professional assessment done",
        "No repairs needed at all",
        "Respectful process guaranteed",
      ],
      timeframe: "Within 24-48 hours",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      number: "03",
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Receive Cash Offer",
      description:
        "Get your fair, no-obligation cash offer within 24 hours. No waiting, no uncertainty.",
      details: [
        "Fair market value offer",
        "Written offer provided",
        "No hidden fees ever",
      ],
      timeframe: "Within 24 hours",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      number: "04",
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Choose Closing Date",
      description:
        "Accept our offer and pick your closing date. We can close as fast as 7 days or work with your timeline.",
      details: [
        "Flexible closing dates available",
        "As fast as 7 days possible",
        "Work with your timeline needs",
      ],
      timeframe: "Your choice",
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      number: "05",
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Get Paid",
      description:
        "Close at a local title company and receive your cash. It's that simple - you're done!",
      details: [
        "Cash at closing guaranteed",
        "Professional title company used",
        "Secure transaction protected",
      ],
      timeframe: "Closing day",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you close?",
      answer:
        "We can close in as little as 7 days, but we're flexible with your timeline. Whether you need to close quickly or need more time, we'll work with your schedule.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "Do you really buy houses in any condition?",
      answer:
        "Yes! We buy houses in any condition - from move-in ready to major fixer-uppers. You don't need to make any repairs, clean, or stage the property.",
      icon: <Home className="w-5 h-5" />,
    },
    {
      question: "Are there any fees or commissions?",
      answer:
        "No! There are no realtor commissions, closing costs, or hidden fees. The offer we make is the amount you'll receive at closing.",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      question: "How do you determine your offer price?",
      answer:
        "We base our offers on current market conditions, comparable sales, and the property's condition. Our goal is to make fair, competitive offers.",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  const testimonialHighlights = [
    {
      quote: "Closed in just 8 days!",
      author: "Sarah M.",
      location: "Austin, TX",
    },
    {
      quote: "No repairs needed - sold as-is",
      author: "Mike R.",
      location: "Phoenix, AZ",
    },
    {
      quote: "Fair price, smooth process",
      author: "Jennifer C.",
      location: "Orlando, FL",
    },
  ];

  return (
    <section
      id="process"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-max">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Proven Process - 500+ Successful Sales
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Simple 5-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selling your house has never been easier. Our streamlined process
            gets you from initial contact to cash in hand in just days, not
            months.
          </p>
        </div>

        {/* Interactive Process Timeline */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "transform scale-105" : ""
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Enhanced Step Card */}
                <div
                  className={`${step.lightColor} rounded-xl p-6 pt-12 h-auto min-h-[400px] flex flex-col relative border-2 transition-all duration-300 ${
                    activeStep === index
                      ? `border-${step.color.split("-")[1]}-300 shadow-xl`
                      : "border-transparent shadow-md hover:shadow-lg"
                  }`}
                >
                  {/* Enhanced Icon */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        activeStep === index ? "animate-pulse" : ""
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 shadow-lg">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full">
                    <h3
                      className={`text-xl font-bold ${step.textColor} mb-3 mt-4`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Enhanced Details List */}
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <CheckCircle
                            className={`w-4 h-4 ${step.textColor} mr-3 flex-shrink-0 mt-0.5`}
                          />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Timeline Badge */}
                    <div
                      className={`${step.color} text-white rounded-lg p-3 mt-auto text-center`}
                    >
                      <div className="text-xs font-semibold uppercase tracking-wide mb-1">
                        Timeline
                      </div>
                      <div className="text-sm font-bold">{step.timeframe}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Testimonial Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonialHighlights.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-800 font-medium mb-3">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">{testimonial.author}</div>
                <div>{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                Join hundreds of satisfied homeowners who chose the fast, easy
                way to sell. Get your cash offer today - no obligation, no
                pressure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="xl"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold transform hover:scale-105 transition-all duration-200 shadow-xl"
                  onClick={() =>
                    document
                      .getElementById("lead-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get My Cash Offer Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="xl"
                  className="bg-white text-green-600 hover:bg-gray-100 border-2 border-white font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-CASH
                </Button>
              </div>

              {/* Urgency Indicator */}
              <div className="inline-flex items-center px-4 py-2 bg-red-500/90 rounded-full text-sm font-medium animate-pulse">
                <Clock className="w-4 h-4 mr-2" />
                Limited Time: 24-Hour Response Guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about our cash home
              buying process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="feature-card cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setShowFAQ(showFAQ === index ? null : index)}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        {faq.icon}
                      </div>
                      {faq.question}
                    </div>
                    <div
                      className={`transform transition-transform duration-200 ${
                        showFAQ === index ? "rotate-180" : ""
                      }`}
                    >
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </CardTitle>
                </CardHeader>
                {showFAQ === index && (
                  <CardContent>
                    <p className="text-gray-600 ml-13 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Homeowners Trust Us
            </h3>
            <p className="text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="trust-stat group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <div className="trust-stat-number">500+</div>
              <div className="trust-stat-label">Homes Purchased</div>
            </div>
            <div className="trust-stat group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Star className="w-8 h-8 text-yellow-600 fill-current" />
              </div>
              <div className="trust-stat-number">4.9/5</div>
              <div className="trust-stat-label">Customer Rating</div>
            </div>
            <div className="trust-stat group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="trust-stat-number">A+</div>
              <div className="trust-stat-label">BBB Rating</div>
            </div>
            <div className="trust-stat group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="trust-stat-number">15</div>
              <div className="trust-stat-label">Years Experience</div>
            </div>
          </div>

          {/* Video Testimonial Teaser */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Watch Real Customer Stories
              </h4>
              <div className="flex justify-center space-x-4">
                <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Sarah's 8-Day Sale
                </button>
                <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Mike's As-Is Sale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
