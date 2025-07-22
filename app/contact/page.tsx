"use client";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const [state, handleSubmit] = useForm("xovdqrky");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Site",
    "Website Redesign",
    "Custom Software",
    "Other",
  ];

  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ];

  const processSteps = [
    {
      icon: <FaUserTie className="text-[#1b4552]" />,
      title: "Tell us about you",
      description: "Basic contact information",
    },
    {
      icon: <FaChartLine className="text-[#1b4552]" />,
      title: "Project details",
      description: "What you need built",
    },
    {
      icon: <FaClock className="text-[#1b4552]" />,
      title: "Review & submit",
      description: "Final confirmation",
    },
  ];

  // ✅ Success UI
  if (state.succeeded) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
          <p className="text-gray-600 text-lg">
            {
              " Your project request has been submitted. We'll get back to you soon."
            }
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Step indicators */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2">
            Start Your Project
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Get a free consultation and project estimate in 24 hours
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  step > index ? "bg-[#1b4552]/10" : "bg-gray-50"
                } ${step === index + 1 ? "border-2 border-[#1b4552]" : ""}`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    step > index
                      ? "bg-[#1b4552] text-white"
                      : "bg-white text-[#1b4552]"
                  }`}
                >
                  {step > index ? <FaCheck /> : item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step forms */}
        <form onSubmit={handleSubmit}>
          <div className="bg-[#f8fafc] rounded-2xl shadow-sm p-8 border border-gray-100">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  Your Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                    />
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                    className="bg-[#1b4552] hover:bg-[#1b4552]/90 text-white font-medium py-3 px-6 rounded-lg transition flex items-center gap-2 disabled:opacity-50"
                  >
                    Next Step <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  Project Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Estimated Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, idx) => (
                        <option key={idx} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                      placeholder="Describe your project goals, requirements, and timeline..."
                    ></textarea>
                  </div>
                </div>
                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-[#1b4552] font-medium py-3 px-6 rounded-lg border border-[#1b4552] hover:bg-[#1b4552]/5 transition"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      !formData.projectType ||
                      !formData.budget ||
                      !formData.details
                    }
                    className="bg-[#1b4552] hover:bg-[#1b4552]/90 text-white font-medium py-3 px-6 rounded-lg transition flex items-center gap-2 disabled:opacity-50"
                  >
                    Review & Submit <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#1b4552]/10 flex items-center justify-center">
                  <FaCheck className="text-[#1b4552] text-3xl" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Ready to Submit!
                </h2>
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-left space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Project Type:</span>
                    <span className="font-medium">{formData.projectType}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium">{formData.budget}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-600">Project Details:</p>
                    <p className="font-medium mt-1">{formData.details}</p>
                  </div>
                </div>
                <div className="pt-4 space-y-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-[#1b4552] hover:bg-[#1b4552]/90 text-white font-medium py-3 px-6 rounded-lg transition"
                  >
                    {state.submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Project Request"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-[#1b4552] font-medium py-2 px-4 rounded-lg hover:bg-[#1b4552]/5 transition"
                  >
                    Make Changes
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Hidden fields for Formspree submission */}
          {Object.entries(formData).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
