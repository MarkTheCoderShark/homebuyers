"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      rating: 5,
      text: "I needed to sell my house quickly due to a job relocation. They made me a fair offer and we closed in just 10 days. The whole process was incredibly smooth and professional.",
      situation: "Job Relocation",
      timeframe: "10 days",
      image: "/api/placeholder/80/80",
    },
    {
      name: "Mike Rodriguez",
      location: "Phoenix, AZ",
      rating: 5,
      text: "My house needed major repairs that I couldn't afford. They bought it as-is and saved me thousands in renovation costs. Best decision I ever made!",
      situation: "Needed Repairs",
      timeframe: "7 days",
      image: "/api/placeholder/80/80",
    },
    {
      name: "Jennifer Chen",
      location: "Orlando, FL",
      rating: 5,
      text: "After my divorce, I needed to sell quickly and split the proceeds. They were compassionate, professional, and made a stressful situation much easier.",
      situation: "Divorce Settlement",
      timeframe: "14 days",
      image: "/api/placeholder/80/80",
    },
    {
      name: "Robert Williams",
      location: "Denver, CO",
      rating: 5,
      text: "I inherited my parents' house but live across the country. They handled everything remotely and made the process incredibly easy. Highly recommend!",
      situation: "Inherited Property",
      timeframe: "12 days",
      image: "/api/placeholder/80/80",
    },
    {
      name: "Lisa Thompson",
      location: "Atlanta, GA",
      rating: 5,
      text: "We tried selling with a realtor for 6 months with no luck. They gave us a fair cash offer and we closed in 2 weeks. Wish we had called them first!",
      situation: "Failed Traditional Sale",
      timeframe: "14 days",
      image: "/api/placeholder/80/80",
    },
    {
      name: "David Martinez",
      location: "Seattle, WA",
      rating: 5,
      text: "Facing foreclosure was terrifying. They helped us sell quickly and avoid the foreclosure on our credit. They literally saved our financial future.",
      situation: "Avoiding Foreclosure",
      timeframe: "8 days",
      image: "/api/placeholder/80/80",
    },
  ];

  const stats = [
    {
      number: "4.9/5",
      label: "Average Rating",
      description: "Based on 500+ reviews",
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      description: "Would recommend to friends",
    },
    {
      number: "12",
      label: "Average Days",
      description: "From offer to closing",
    },
    {
      number: "500+",
      label: "Happy Customers",
      description: "Homes purchased successfully",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real homeowners say
            about their experience selling to us.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="feature-card hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-green-200" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Situation Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {testimonial.situation}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Closed in {testimonial.timeframe}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Watch Real Customer Stories
            </h3>
            <p className="text-gray-600">
              See how we've helped homeowners across the country sell their
              houses fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video Placeholder 1 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600 font-medium">Sarah's Story</p>
                  <p className="text-sm text-gray-500">
                    Austin, TX - 10 Day Close
                  </p>
                </div>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600 font-medium">Mike's Experience</p>
                  <p className="text-sm text-gray-500">
                    Phoenix, AZ - As-Is Sale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Trusted & Verified
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* BBB Badge */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">BBB</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">A+ Rating</div>
                <div className="text-xs text-gray-600">
                  Better Business Bureau
                </div>
              </div>
            </div>

            {/* Google Reviews */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">4.9 Stars</div>
                <div className="text-xs text-gray-600">Google Reviews</div>
              </div>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Excellent</div>
                <div className="text-xs text-gray-600">Trustpilot</div>
              </div>
            </div>

            {/* Yelp */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">Y</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">5 Stars</div>
                <div className="text-xs text-gray-600">Yelp Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
