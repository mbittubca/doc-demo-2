'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import servicesData from '@/data/services.json';

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    timeSlot: '',
    fullName: '',
    phone: '',
    email: '',
    age: '',
    reason: '',
    patientType: 'first-time',
    whatsappConfirmation: false
  });

  // Generate next 14 days for calendar
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      // Skip Sundays
      if (dayName !== 'Sun') {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          dayName: dayName
        });
      }
    }
    return dates;
  };

  const availableDates = generateDates();

  const timeSlots = [
    { time: '10:00 AM', available: true, period: 'Morning' },
    { time: '11:00 AM', available: true, period: 'Morning' },
    { time: '12:00 PM', available: true, period: 'Morning' },
    { time: '2:00 PM', available: true, period: 'Afternoon' },
    { time: '3:00 PM', available: true, period: 'Afternoon' },
    { time: '4:00 PM', available: true, period: 'Afternoon' },
    { time: '5:00 PM', available: true, period: 'Evening' },
    { time: '6:00 PM', available: true, period: 'Evening' }
  ];

  // Pre-select service from query params (if coming from services page)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const serviceId = params.get('service');
      if (serviceId) {
        setFormData(prev => ({ ...prev, service: serviceId }));
      }
    }
  }, []);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    alert('Appointment booked successfully! You will receive a confirmation shortly.');
    console.log('Booking data:', formData);
  };

  const isStepComplete = (step) => {
    switch(step) {
      case 1: return formData.service !== '';
      case 2: return formData.date !== '';
      case 3: return formData.timeSlot !== '';
      case 4: return formData.fullName && formData.phone;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Visit
            </h1>
            <p className="text-xl text-blue-100">
              Choose a convenient time - online booking available 24/7
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50"></div>
      </section>

      {/* Progress Indicator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  currentStep === step 
                    ? 'bg-blue-600 text-white scale-110 shadow-lg' 
                    : currentStep > step || isStepComplete(step)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step || (currentStep === step && isStepComplete(step)) ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : step}
                </div>
                <span className="text-xs mt-2 text-center hidden sm:block text-gray-600">
                  {step === 1 && 'Service'}
                  {step === 2 && 'Date'}
                  {step === 3 && 'Time'}
                  {step === 4 && 'Details'}
                  {step === 5 && 'Confirm'}
                </span>
              </div>
              {step < 5 && (
                <div className={`h-1 flex-1 mx-2 transition-all ${
                  currentStep > step ? 'bg-green-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Service</h2>
                  <p className="text-gray-600">Choose the type of consultation you need</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: service.id })}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        formData.service === service.id
                          ? 'border-blue-600 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                          <div className="text-blue-600 font-bold">₹{service.fee}</div>
                        </div>
                        {formData.service === service.id && (
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Choose Date */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Date</h2>
                  <p className="text-gray-600">Select a convenient date for your appointment</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {availableDates.map((dateObj) => (
                    <button
                      key={dateObj.date}
                      type="button"
                      onClick={() => setFormData({ ...formData, date: dateObj.date })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.date === dateObj.date
                          ? 'border-green-500 bg-green-50 shadow-lg'
                          : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-600 mb-1">{dateObj.dayName}</div>
                        <div className="text-lg font-bold text-gray-900">{dateObj.display}</div>
                        {formData.date === dateObj.date && (
                          <svg className="w-6 h-6 text-green-500 mx-auto mt-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Select Time Slot */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Time Slot</h2>
                  <p className="text-gray-600">Choose your preferred time</p>
                </div>
                
                {['Morning', 'Afternoon', 'Evening'].map((period) => (
                  <div key={period}>
                    <h3 className="font-semibold text-gray-700 mb-3">{period}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.filter(slot => slot.period === period).map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot.time })}
                          disabled={!slot.available}
                          className={`p-4 rounded-lg border-2 font-medium transition-all ${
                            !slot.available
                              ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                              : formData.timeSlot === slot.time
                              ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-lg'
                              : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Patient Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Patient Details</h2>
                  <p className="text-gray-600">Please provide your information</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Visit
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Please describe your symptoms or reason for visit..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Patient Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="first-time"
                        checked={formData.patientType === 'first-time'}
                        onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">First-time Patient</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="returning"
                        checked={formData.patientType === 'returning'}
                        onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                        className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">Returning Patient</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Booking</h2>
                  <p className="text-gray-600">Please review your appointment details</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Service</div>
                      <div className="text-gray-700">
                        {servicesData.find(s => s.id === formData.service)?.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Date & Time</div>
                      <div className="text-gray-700">
                        {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {formData.timeSlot}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Patient Details</div>
                      <div className="text-gray-700">{formData.fullName}</div>
                      <div className="text-gray-700">{formData.phone}</div>
                      {formData.email && <div className="text-gray-700">{formData.email}</div>}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Consultation Fee</div>
                      <div className="text-2xl font-bold text-blue-600">
                        ₹{servicesData.find(s => s.id === formData.service)?.fee}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-yellow-800">Please Note:</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Payment will be collected at the clinic. Please arrive 10 minutes before your appointment time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.whatsappConfirmation}
                    onChange={(e) => setFormData({ ...formData, whatsappConfirmation: e.target.checked })}
                    className="w-4 h-4 text-green-600 focus:ring-2 focus:ring-green-500 rounded"
                  />
                  <label className="ml-2 text-gray-700">
                    Send confirmation via WhatsApp
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepComplete(currentStep)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 ${
                    isStepComplete(currentStep)
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Confirm Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Booking Methods */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Alternative Booking Methods
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+919876543210"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm mb-2">Prefer to speak with us?</p>
              <p className="text-blue-600 font-medium">+91 98765 43210</p>
            </a>

            <a
              href="https://wa.me/919876543210?text=Hi%20Dr.%20Johnson%2C%20I'd%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-600 text-sm mb-2">Quick & convenient</p>
              <p className="text-green-600 font-medium">Message Us</p>
            </a>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Walk-In</h4>
              <p className="text-gray-600 text-sm mb-2">During clinic hours</p>
              <p className="text-purple-600 font-medium">Mon-Sat: 10 AM - 7 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Policies */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Appointment Policies</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-start gap-3 mb-2">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Cancellation Policy</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Please provide at least 24 hours notice for cancellations to avoid charges.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Late Arrival</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    15 minutes grace period. Please arrive on time to avoid rescheduling.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">What to Bring</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    ID proof, insurance card, previous reports, and current medication list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
