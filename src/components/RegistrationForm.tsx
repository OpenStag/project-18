'use client';

import { useState } from 'react';
import Image from 'next/image';
import { memo } from 'react';

const HeroImage = memo(function HeroImage() {
  return (
    <div className="relative flex-1 min-h-screen">
      <Image
        src="/nurse.jpg"
        alt="Healthcare professional"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
});

interface FormData {
  name: string;
  password: string;
  email: string;
  phone: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    password: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let message = `Request failed (${response.status})`;
        const contentType = response.headers.get('content-type') || '';
        try {
          if (contentType.includes('application/json')) {
            const errorData = await response.json();
            if (errorData && (errorData.message || errorData.error)) {
              message = errorData.message || errorData.error;
            }
          } else {
            const text = await response.text();
            if (text && text.trim().startsWith('<!DOCTYPE')) {
              message = 'Server returned HTML instead of JSON. Check the API route or URL.';
            } else if (text) {
              message = text.slice(0, 300);
            }
          }
        } catch (_) {
          // Ignore parse errors and use default message
        }
        throw new Error(message);
      }

      setSuccess(true);
      setFormData({ name: '', password: '', email: '', phone: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Registration Form */}
      <div className="flex-1 bg-[#0b2a59] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white text-center mb-8 font-sans">
            Register
          </h1>
          
          {/* Form Container */}
          <div className="bg-[#5A78BD] p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-black font-bold text-lg mb-2 font-sans">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black placeholder:text-gray-600 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-black font-bold text-lg mb-2 font-sans">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black placeholder:text-gray-600 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-black font-bold text-lg mb-2 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black placeholder:text-gray-600 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-black font-bold text-lg mb-2 font-sans">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black placeholder:text-gray-600 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="text-green-600 text-sm font-medium">
                  Registration successful! Welcome aboard.
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#7c3aed] text-white font-bold py-3 px-8 rounded hover:bg-[#6d28d9] disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <HeroImage />
    </div>
  );
}
