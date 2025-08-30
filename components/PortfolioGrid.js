import React from 'react';

const PortfolioGrid = () => {
  return (
    <div className="bg-black border border-blue-700 p-4 font-mono text-white text-base leading-relaxed space-y-4">

      {/* Terminal CD */}
      <p>
        <span className="text-blue-500">┌──(</span>
        <span className="text-red-500">root㉿imraflip.com</span>
        <span className="text-blue-500">)-[~]</span>
      </p>
      <p>
        <span className="text-blue-500">└─</span>
        <span className="text-red-500">$</span> cd portfolio/
      </p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Hall of Fame */}
        <div className="border border-blue-700 p-4 space-y-2">
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[~/portfolio]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> cat hall-of-fame.txt recognitions.txt
          </p>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li><a href="#" className="underline text-blue-400 hover:text-blue-300">Contabo: Cache Deception Attack</a></li>
            <li><a href="#" className="underline text-blue-400 hover:text-blue-300">Company X</a></li>
            <li><a href="#" className="underline text-blue-400 hover:text-blue-300">Company Y</a></li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="border border-blue-700 p-4 space-y-2">
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[~/portfolio]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> cat certs.txt
          </p>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li><a href="#" className="underline text-blue-400 hover:text-blue-300">Google Cybersecurity Professional Certificate</a></li>
            <li><a href="#" className="underline text-blue-400 hover:text-blue-300">CompTIA Security+</a></li>
          </ul>
        </div>

        {/* Progress */}
        <div className="border border-blue-700 p-4 space-y-2 col-span-full md:col-span-2">
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[~/portfolio]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> cat progress.txt
          </p>
          <div className="mt-2">
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3462625"
              className="w-full max-w-m h-[90px]"
              style={{ border: 'none' }}
              title="TryHackMe Progress"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioGrid;
