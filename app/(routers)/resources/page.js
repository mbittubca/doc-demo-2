'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept major insurance providers including Star Health, ICICI Lombard, HDFC Ergo, and Bajaj Allianz. We also accept cash, card, and UPI payments for those without insurance coverage."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a government-issued ID, insurance card (if applicable), list of current medications, any previous medical records or test results, and a list of questions you'd like to discuss with the doctor."
    },
    {
      question: "Do you offer telemedicine consultations?",
      answer: "Yes, we offer video consultations via WhatsApp and Zoom for follow-up appointments and minor health concerns. However, initial consultations are preferably done in person for a comprehensive physical examination."
    },
    {
      question: "How long is a typical appointment?",
      answer: "Initial consultations typically take 30 minutes to ensure a thorough evaluation. Follow-up appointments are usually 15-20 minutes. We believe in giving each patient the time they need without rushing."
    },
    {
      question: "Is parking available?",
      answer: "Yes, free parking is available at our clinic premises. We have dedicated parking spaces for patients with easy access to the clinic entrance."
    },
    {
      question: "Do you see walk-in patients?",
      answer: "Yes, we welcome walk-in patients during clinic hours. However, scheduled appointments receive priority. We recommend booking an appointment to minimize wait times, especially during peak hours."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to other patients who need care. Emergency cancellations are always understood and accommodated."
    },
    {
      question: "Do you provide prescription refills?",
      answer: "Yes, prescription refills can be requested through phone or WhatsApp for existing patients. However, periodic follow-up appointments are necessary to monitor your condition and adjust medications as needed."
    }
  ];

  const blogPosts = [
    {
      title: "10 Ways to Boost Your Immune System This Winter",
      category: "Preventive Care",
      date: "October 5, 2025",
      excerpt: "Discover evidence-based strategies to strengthen your immune system and stay healthy during the cold season. From nutrition tips to lifestyle changes.",
      image: "💪",
      readTime: "5 min read"
    },
    {
      title: "Understanding Diabetes: Prevention and Management",
      category: "Chronic Disease",
      date: "September 28, 2025",
      excerpt: "A comprehensive guide to diabetes prevention, early detection, and effective management strategies for living a healthy life with diabetes.",
      image: "🩺",
      readTime: "8 min read"
    },
    {
      title: "Heart Health: Small Changes, Big Impact",
      category: "Cardiovascular Health",
      date: "September 15, 2025",
      excerpt: "Learn how simple daily habits can significantly improve your cardiovascular health and reduce your risk of heart disease.",
      image: "❤️",
      readTime: "6 min read"
    },
    {
      title: "Mental Health Matters: Stress Management Tips",
      category: "Mental Wellness",
      date: "September 1, 2025",
      excerpt: "Practical strategies for managing stress, anxiety, and maintaining good mental health in today's fast-paced world.",
      image: "🧠",
      readTime: "7 min read"
    },
    {
      title: "Nutrition Essentials: Eating for Optimal Health",
      category: "Nutrition",
      date: "August 20, 2025",
      excerpt: "Expert guidance on balanced nutrition, healthy eating habits, and how diet impacts your overall health and wellbeing.",
      image: "🥗",
      readTime: "6 min read"
    }
  ];

  const downloadableForms = [
    {
      title: "New Patient Registration Form",
      description: "Complete this form before your first visit to save time at check-in.",
      icon: "📋",
      fileSize: "120 KB"
    },
    {
      title: "Medical History Questionnaire",
      description: "Detailed health history form to help us understand your medical background.",
      icon: "📝",
      fileSize: "95 KB"
    },
    {
      title: "Consent Forms",
      description: "Standard consent forms for treatment and information sharing.",
      icon: "✍️",
      fileSize: "85 KB"
    },
    {
      title: "Insurance Information Sheet",
      description: "Form to provide your insurance details for billing purposes.",
      icon: "🏥",
      fileSize: "75 KB"
    }
  ];

  const visitSteps = [
    {
      step: "1",
      title: "Check-In",
      description: "Arrive 10 minutes early to complete any remaining paperwork. Our friendly staff will greet you and verify your information."
    },
    {
      step: "2",
      title: "Vital Signs",
      description: "Our nurse will take your blood pressure, temperature, pulse, and other vital measurements in a comfortable examination room."
    },
    {
      step: "3",
      title: "Consultation",
      description: "Meet with the doctor for a thorough discussion of your health concerns, medical history, and physical examination if needed."
    },
    {
      step: "4",
      title: "Treatment Plan",
      description: "Receive a personalized treatment plan, prescriptions if necessary, and recommendations for tests or follow-up care."
    },
    {
      step: "5",
      title: "Checkout & Follow-Up",
      description: "Complete payment at the front desk and schedule any follow-up appointments. Receive care instructions and contact information."
    }
  ];

  const healthResources = [
    {
      title: "Centers for Disease Control and Prevention (CDC)",
      description: "Trusted health information, disease prevention, and wellness resources.",
      url: "#",
      icon: "🏛️"
    },
    {
      title: "World Health Organization (WHO)",
      description: "International health guidelines, disease outbreaks, and global health news.",
      url: "#",
      icon: "🌍"
    },
    {
      title: "Mayo Clinic Health Information",
      description: "Comprehensive medical information on diseases, symptoms, and treatments.",
      url: "#",
      icon: "📚"
    },
    {
      title: "Indian Council of Medical Research (ICMR)",
      description: "National guidelines and health recommendations for Indian population.",
      url: "#",
      icon: "🇮🇳"
    },
    {
      title: "Medication Safety Guide",
      description: "Learn about proper medication storage, dosages, and potential interactions.",
      url: "#",
      icon: "💊"
    },
    {
      title: "Preventive Care Checklists",
      description: "Age-appropriate health screenings and vaccination schedules.",
      url: "#",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Patient Resources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know for a smooth and informed healthcare experience
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and policies
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips & Blog Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Health Tips & Articles
            </h2>
            <p className="text-lg text-gray-600">
              Expert advice and insights for better health and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group/btn">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Forms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Patient Forms
            </h2>
            <p className="text-lg text-gray-600">
              Download and complete these forms before your visit to save time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {downloadableForms.map((form, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">
                    {form.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {form.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {form.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{form.fileSize}</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm font-semibold">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect During Your Visit */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect During Your Visit
            </h2>
            <p className="text-lg text-gray-600">
              A step-by-step walkthrough of your appointment experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {visitSteps.map((item, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Education Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Health Education Resources
            </h2>
            <p className="text-lg text-gray-600">
              Trusted sources for reliable health information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  Visit Website
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have Questions? We're Here to Help
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find the answer you're looking for? Contact us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
            <Link
              href="/book"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center border-2 border-blue-500"
            >
              Book Appointment
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
