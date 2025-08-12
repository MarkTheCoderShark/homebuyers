"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Home,
  Calculator,
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
    name: "",
  });

  const [estimatorData, setEstimatorData] = useState({
    address: "",
    sqft: "",
    bedrooms: "",
    condition: "",
  });

  const [showEstimator, setShowEstimator] = useState(false);
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEstimatorChange = (field: string, value: string) => {
    setEstimatorData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = () => {
    // Simple estimation logic - in real app, this would call an API
    const basePricePerSqft = 150;
    const sqft = parseInt(estimatorData.sqft) || 1500;
    const bedrooms = parseInt(estimatorData.bedrooms) || 3;
    const conditionMultiplier =
      estimatorData.condition === "excellent"
        ? 1.1
        : estimatorData.condition === "good"
          ? 1.0
          : estimatorData.condition === "fair"
            ? 0.9
            : 0.8;

    const estimate = Math.round(
      sqft * basePricePerSqft * conditionMultiplier * (1 + bedrooms * 0.05),
    );
    setEstimatedValue(estimate);
  };

  return (
    <section
      id="hero"
      className="hero-gradient text-white relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container-max section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Enhanced Main Message */}
          <div className="fade-in">
            {/* Urgency Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-500/90 text-white mb-4 animate-pulse">
                <Clock className="w-4 h-4 mr-2" />
                Limited Time: Get Cash Offer in 24 Hours
              </span>
            </div>

            <h1 className="hero-title text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Sell Your House Fast for{" "}
              <span className="text-yellow-300 relative">
                Cash
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/30 -skew-x-12"></div>
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed">
              We buy homes in ANY condition. No repairs, no showings, no
              hassles. Get a fair cash offer and close in as little as 7 days.
            </p>

            {/* Enhanced Key Benefits with Icons */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <DollarSign className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">Fair Cash Offers</div>
                  <div className="text-sm text-green-200">
                    Market-based pricing
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">Close in 7 Days</div>
                  <div className="text-sm text-green-200">
                    Guaranteed timeline
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <Home className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">Any Condition</div>
                  <div className="text-sm text-green-200">
                    No repairs needed
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">All 50 States</div>
                  <div className="text-sm text-green-200">
                    Nationwide service
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/20 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-green-100">
                      Homes Purchased
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                  <div>
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-sm text-green-100">
                      Customer Rating
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">A+</div>
                    <div className="text-sm text-green-100">BBB Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-xl transform hover:scale-105 transition-all duration-200"
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

            {/* Quick Estimator Toggle */}
            <div className="mt-6">
              <button
                onClick={() => setShowEstimator(!showEstimator)}
                className="text-yellow-300 hover:text-yellow-200 font-medium flex items-center transition-colors"
              >
                <Calculator className="w-4 h-4 mr-2" />
                {showEstimator ? "Hide" : "Get Instant"} Property Value Estimate
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Lead Form with Tabs */}
          <div className="slide-up">
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              id="lead-form"
            >
              {/* Tab Headers */}
              <div className="flex bg-gray-50 border-b">
                <button
                  onClick={() => setShowEstimator(false)}
                  className={`flex-1 py-4 px-6 font-medium transition-colors ${
                    !showEstimator
                      ? "bg-white text-green-600 border-b-2 border-green-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Get Cash Offer
                </button>
                <button
                  onClick={() => setShowEstimator(true)}
                  className={`flex-1 py-4 px-6 font-medium transition-colors ${
                    showEstimator
                      ? "bg-white text-green-600 border-b-2 border-green-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Calculator className="w-4 h-4 inline mr-2" />
                  Quick Estimate
                </button>
              </div>

              <div className="p-8">
                {!showEstimator ? (
                  /* Lead Form */
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Get Your Cash Offer
                      </h2>
                      <p className="text-gray-600">
                        Fill out the form below and we'll contact you within 24
                        hours
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="form-label">Property Address *</label>
                        <Input
                          type="text"
                          placeholder="123 Main St, City, State"
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">Your Name *</label>
                          <Input
                            type="text"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
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
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="form-input"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Email Address</label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="form-input"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full cta-button text-lg py-4 transform hover:scale-105 transition-all duration-200"
                        size="lg"
                      >
                        Get My Free Cash Offer
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        By submitting this form, you agree to receive calls and
                        texts. No obligation. We respect your privacy.
                      </p>
                    </form>
                  </>
                ) : (
                  /* Property Estimator */
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Property Value Estimator
                      </h2>
                      <p className="text-gray-600">
                        Get an instant estimate of your home's value
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="form-label">Property Address *</label>
                        <Input
                          type="text"
                          placeholder="123 Main St, City, State"
                          value={estimatorData.address}
                          onChange={(e) =>
                            handleEstimatorChange("address", e.target.value)
                          }
                          className="form-input"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">Square Feet</label>
                          <Input
                            type="number"
                            placeholder="1500"
                            value={estimatorData.sqft}
                            onChange={(e) =>
                              handleEstimatorChange("sqft", e.target.value)
                            }
                            className="form-input"
                          />
                        </div>

                        <div>
                          <label className="form-label">Bedrooms</label>
                          <select
                            value={estimatorData.bedrooms}
                            onChange={(e) =>
                              handleEstimatorChange("bedrooms", e.target.value)
                            }
                            className="form-input"
                          >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Property Condition</label>
                        <select
                          value={estimatorData.condition}
                          onChange={(e) =>
                            handleEstimatorChange("condition", e.target.value)
                          }
                          className="form-input"
                        >
                          <option value="">Select condition</option>
                          <option value="excellent">Excellent</option>
                          <option value="good">Good</option>
                          <option value="fair">Fair</option>
                          <option value="poor">Needs Work</option>
                        </select>
                      </div>

                      <Button
                        onClick={calculateEstimate}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 transform hover:scale-105 transition-all duration-200"
                        disabled={!estimatorData.address || !estimatorData.sqft}
                      >
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate Estimate
                      </Button>

                      {estimatedValue && (
                        <div className="mt-6 p-6 bg-green-50 rounded-lg border-2 border-green-200">
                          <div className="text-center">
                            <div className="text-sm text-green-600 font-medium mb-2">
                              Estimated Property Value
                            </div>
                            <div className="text-3xl font-bold text-green-700 mb-4">
                              ${estimatedValue.toLocaleString()}
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              This is a rough estimate. Get an accurate cash
                              offer by filling out our form.
                            </p>
                            <Button
                              onClick={() => setShowEstimator(false)}
                              className="bg-green-600 hover:bg-green-700 text-white font-bold"
                            >
                              Get Accurate Cash Offer
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Enhanced Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      No Obligation
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      100% Free
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Secure & Private
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
