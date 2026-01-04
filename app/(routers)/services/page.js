import Link from "next/link";
import servicesData from "@/data/services.json";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Services & Treatments
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare solutions tailored to your needs with evidence-based medicine
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50"></div>
      </section>

      {/* Page Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Quality Care You Can Trust
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Dr. Johnson Clinic, we offer a comprehensive range of medical services designed to keep you 
          and your family healthy. Our approach combines advanced medical knowledge with compassionate, 
          personalized care.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Every treatment plan is based on the latest evidence-based medicine and tailored to your unique 
          health needs and lifestyle. We believe in transparency, which is why we clearly communicate our 
          fees and what to expect during each visit.
        </p>
      </section>

      {/* Detailed Service Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="grid md:grid-cols-[2fr_1fr] gap-8 p-8 md:p-10">
                {/* Service Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Conditions Treated */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Conditions Treated:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.conditions.map((condition, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      What to Expect:
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      {getExpectations(service.id).map((expectation, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{expectation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing and CTA */}
                <div className="flex flex-col justify-between">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Consultation Fee</p>
                      <div className="text-4xl font-bold text-blue-600 mb-1">
                        ₹{service.fee}
                      </div>
                      <p className="text-xs text-gray-500">Per session</p>
                    </div>
                  </div>

                  <Link 
                    href={`/book?service=${service.id}`}
                    className="bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book for This Service
                  </Link>

                  <div className="mt-4 text-center">
                    <a 
                      href="tel:+919876543210"
                      className="text-gray-600 hover:text-blue-600 text-sm font-medium inline-flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Or call to inquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Treatment Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Patient-Centered Care
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We put you at the center of everything we do. Your health goals, concerns, and preferences 
                guide our treatment decisions. We take time to listen and understand your unique situation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Evidence-Based Medicine
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                All our treatment protocols are based on the latest scientific research and clinical guidelines. 
                We stay updated with medical advances to provide you with the best possible care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Patient Education
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We believe informed patients make better health decisions. We take time to explain your 
                condition, treatment options, and empower you to actively participate in your care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Choose Our Services?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Flexible Scheduling",
              desc: "Same-day appointments available with extended hours",
              color: "blue"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Transparent Pricing",
              desc: "Clear fee structure with no hidden charges",
              color: "green"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
              title: "Modern Equipment",
              desc: "State-of-the-art diagnostic and treatment tools",
              color: "purple"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Compassionate Care",
              desc: "Warm, friendly environment focused on your comfort",
              color: "rose"
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
              <div className={`text-${feature.color}-600 mb-4 flex justify-center`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance Information */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We accept most major insurance providers and offer flexible payment options for your convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["Cash", "Credit/Debit Card", "UPI", "Insurance Claims"].map((method, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                  {method}
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              For insurance queries, please contact our front desk at <a href="tel:+919876543210" className="text-blue-600 hover:underline font-medium">+91 98765 43210</a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your appointment today and take the first step towards better health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>
            <a 
              href="tel:+919876543210"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all border-2 border-blue-400 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get expectations for each service
function getExpectations(serviceId) {
  const expectations = {
    "general-consult": [
      "Thorough physical examination and health assessment",
      "Discussion of symptoms, medical history, and lifestyle",
      "Diagnostic tests if required",
      "Personalized treatment plan and prescriptions",
      "Follow-up recommendations"
    ],
    "chronic-manage": [
      "Review of current medications and treatment effectiveness",
      "Regular monitoring of vital signs and lab results",
      "Lifestyle and dietary counseling",
      "Medication adjustments as needed",
      "Long-term health goal setting"
    ],
    "preventive": [
      "Comprehensive physical examination",
      "Age-appropriate screening tests (blood work, ECG, etc.)",
      "Health risk assessment and counseling",
      "Vaccination review and updates",
      "Personalized wellness recommendations"
    ],
    "womens-health": [
      "Confidential consultation in a comfortable setting",
      "Comprehensive gynecological examination if needed",
      "Discussion of reproductive health concerns",
      "Preventive care and screening recommendations",
      "Referrals to specialists if required"
    ],
    "pediatric": [
      "Gentle examination appropriate for child's age",
      "Growth and development assessment",
      "Vaccination administration per schedule",
      "Parent counseling on nutrition and care",
      "Developmental milestone tracking"
    ],
    "minor-procedures": [
      "Local anesthesia for comfort during procedures",
      "Sterile technique and modern equipment",
      "Clear explanation of the procedure",
      "Post-procedure care instructions",
      "Follow-up appointment if needed"
    ]
  };
  return expectations[serviceId] || [];
}
