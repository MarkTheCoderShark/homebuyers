"use client";

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
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Contact Us",
      description:
        "Call us or fill out our form with your property details. We'll schedule a convenient time to evaluate your home.",
      details: [
        "Quick 5-minute call",
        "No pressure process",
        "Flexible scheduling",
      ],
      timeframe: "Same day response",
    },
    {
      number: "02",
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Property Evaluation",
      description:
        "We'll visit your property for a quick, no-obligation assessment. This usually takes 15-30 minutes.",
      details: [
        "Professional assessment",
        "No repairs needed",
        "Respectful process",
      ],
      timeframe: "Within 24-48 hours",
    },
    {
      number: "03",
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Receive Cash Offer",
      description:
        "Get your fair, no-obligation cash offer within 24 hours. No waiting, no uncertainty.",
      details: ["Fair market value", "Written offer", "No hidden fees"],
      timeframe: "Within 24 hours",
    },
    {
      number: "04",
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Choose Closing Date",
      description:
        "Accept our offer and pick your closing date. We can close as fast as 7 days or work with your timeline.",
      details: [
        "Flexible closing dates",
        "As fast as 7 days",
        "Work with your timeline",
      ],
      timeframe: "Your choice",
    },
    {
      number: "05",
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Get Paid",
      description:
        "Close at a local title company and receive your cash. It's that simple - you're done!",
      details: [
        "Cash at closing",
        "Professional title company",
        "Secure transaction",
      ],
      timeframe: "Closing day",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you close?",
      answer:
        "We can close in as little as 7 days, but we're flexible with your timeline. Whether you need to close quickly or need more time, we'll work with your schedule.",
    },
    {
      question: "Do you really buy houses in any condition?",
      answer:
        "Yes! We buy houses in any condition - from move-in ready to major fixer-uppers. You don't need to make any repairs, clean, or stage the property.",
    },
    {
      question: "Are there any fees or commissions?",
      answer:
        "No! There are no realtor commissions, closing costs, or hidden fees. The offer we make is the amount you'll receive at closing.",
    },
    {
      question: "How do you determine your offer price?",
      answer:
        "We base our offers on current market conditions, comparable sales, and the property's condition. Our goal is to make fair, competitive offers.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Simple 5-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selling your house has never been easier. Our streamlined process
            gets you from initial contact to cash in hand in just days, not
            months.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step Content with Icon */}
                <div className="bg-gray-50 rounded-lg p-4 pt-8 h-96 flex flex-col relative">
                  {/* Icon */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number in top-left */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-100 rounded-lg p-2 mt-auto">
                    <div className="text-xs font-semibold text-green-800 uppercase tracking-wide">
                      Timeline
                    </div>
                    <div className="text-xs font-medium text-green-700">
                      {step.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied homeowners who chose the fast, easy way
              to sell. Get your cash offer today - no obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
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
                className="bg-white text-green-600 hover:bg-gray-100 border-2 border-white font-bold shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-CASH
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600">
              Get answers to the most common questions about our cash home
              buying process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm font-bold">?</span>
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 ml-9">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Homeowners Trust Us
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="trust-stat">
              <div className="trust-stat-number">500+</div>
              <div className="trust-stat-label">Homes Purchased</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-number">4.9/5</div>
              <div className="trust-stat-label">Customer Rating</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-number">A+</div>
              <div className="trust-stat-label">BBB Rating</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-number">15</div>
              <div className="trust-stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
