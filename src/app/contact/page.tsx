'use client'

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function Page() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  // --background-start-color: #021bff;
  // --background-end-color: #2c60f117;

  return (
    <div className="min-h-screen bg-[#2c60f117] dark:bg-gray-900 py-12 pt-60 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-black">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with questions about our plastic recycling services, programs, or events. Reach out and let us know how we can assist you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:black w-full p-4 bg-[#2c60f117] placeholder-[#021bffaf]" // Updated placeholder color here
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:black w-full p-4 bg-[#2c60f117] placeholder-[#021bffaf]" // Updated placeholder color here
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#021bff] text-[white] font-medium hover:bg-black focus:outline-none focus:ring-2 focus:black focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;


// / 1329ecfe, 2a3ef1a3, 0011a8