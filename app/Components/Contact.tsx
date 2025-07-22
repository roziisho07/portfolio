"use client";
import React from "react";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xovdqrky");
  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative contact bg-[#f8fafc] py-20 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you for your message!
            </h2>
            <p className="text-lg text-gray-600">
              I will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      id="contact"
      className="relative contact bg-[#f8fafc] py-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-[#f8fafc]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#1b4552]/10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            {" Let's"} <span className="text-[#1b4552]">Build</span> Something
            Great
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            {
              "Have a project in mind or want to discuss opportunities? Reach out and let's start a conversation."
            }
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                  placeholder="What's this about?"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1b4552] focus:border-[#1b4552] transition"
                  placeholder="Tell me about your project..."
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={state.submitting}
                className="w-full z-10 cursor-pointer bg-[#1b4552] hover:bg-[#1b4552]/90 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1b4552]/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-[#1b4552] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">Islamabad, PK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1b4552]/10 p-3 rounded-full">
                    <FaPhoneAlt className="text-[#1b4552] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+923 419825949</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1b4552]/10 p-3 rounded-full">
                    <FaEnvelope className="text-[#1b4552] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">roziisho@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">
                    9:00 AM - 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Weekends</span>
                  <span className="text-gray-900 font-medium">
                    By appointment
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
