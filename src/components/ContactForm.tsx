// src/components/contact/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Enquiry Form</h2>
        <p className="text-gray-600 mb-10 text-center">
          Fill out the form below and we’ll get back to you shortly.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center py-8 bg-green-50 rounded-md">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Thank you for reaching out!
            </h3>
            <p className="text-gray-600">We’ll get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}

