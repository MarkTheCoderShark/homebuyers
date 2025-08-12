"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  DollarSign,
  Home,
  Shield,
  Users,
  CheckCircle,
  Zap,
  MapPin,
  Calculator,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Fair Cash Offers",
      description:
        "Get competitive cash offers based on current market value. No lowball offers - we pay fair prices for your home.",
      features: [
        "Market-based pricing",
        "No hidden fees",
        "Transparent process",
      ],
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Lightning Fast Closing",
      description:
        "Close in as little as 7 days. We have the cash ready and can work around your timeline.",
      features: [
        "7-day closing possible",
        "Flexible timeline",
        "No financing delays",
      ],
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "Buy As-Is Condition",
      description:
        "No need for repairs, cleaning, or staging. We buy homes in any condition - from pristine to fixer-uppers.",
      features: [
        "No repairs needed",
        "No cleaning required",
        "Any condition accepted",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Zero Fees & Commissions",
      description:
        "No realtor commissions, closing costs, or hidden fees. What we offer is what you get.",
      features: ["No realtor fees", "No closing costs", "No hidden charges"],
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "No Showings or Open Houses",
      description:
        "Skip the hassle of showings, open houses, and strangers walking through your home.",
      features: ["Private process", "No disruptions", "One simple visit"],
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Guaranteed Sale",
      description:
        "No waiting for buyers or worrying about deals falling through. We guarantee the purchase.",
      features: ["100% certainty", "No deal failures", "Cash in hand"],
    },
  ];

  const comparisonData = [
    {
      feature: "Timeline",
      traditional: "3-6 months average",
      us: "7-30 days guaranteed",
    },
    {
      feature: "Repairs",
      traditional: "Thousands in repairs",
      us: "Zero - we buy as-is",
    },
    {
      feature: "Fees",
      traditional: "6-10% in commissions",
      us: "Zero fees or commissions",
    },
    {
      feature: "Showings",
      traditional: "Multiple showings",
      us: "One simple visit",
    },
    {
      feature: "Certainty",
      traditional: "Deals can fall through",
      us: "100% guaranteed close",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Cash Home Buying Service?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've simplified the home selling process to save you time, money,
            and stress. Here's how we make selling your house fast and easy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="feature-card hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Traditional Sale vs. Cash Sale
            </h3>
            <p className="text-gray-600">
              See the difference our cash buying service makes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-red-600">
                    Traditional Sale
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">
                    Our Cash Offer
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-red-600">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">
                      {row.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <div className="bg-green-600 text-white rounded-2xl p-8">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              We Buy Houses Nationwide
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Our service covers all 50 states and major metropolitan areas. No
              matter where your property is located, we can help you sell fast.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>California</div>
              <div>Texas</div>
              <div>Florida</div>
              <div>New York</div>
              <div>Illinois</div>
              <div>Pennsylvania</div>
              <div>Ohio</div>
              <div>Georgia</div>
            </div>
            <p className="text-green-200 text-sm mt-4">+ 42 more states</p>
          </div>
        </div>
      </div>
    </section>
  );
}
