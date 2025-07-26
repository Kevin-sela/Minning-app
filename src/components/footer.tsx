import React, { memo, Suspense } from "react";

const FooterContent = () => (
  <footer className="bg-black text-white py-12 w-full">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">About Us</h3>
        <p className="text-gray-300 leading-relaxed">
          We are a leading mining company committed to sustainable and responsible resource extraction, leveraging technology and expertise to deliver value and innovation.
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Useful Links</h3>
        <ul className="text-gray-300 space-y-2">
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Mining Services
            </a>
          </li>
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Sustainability Initiatives
            </a>
          </li>
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Community Programs
            </a>
          </li>
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Contact Detail</h3>
        <p className="text-gray-300 mb-2">Connect with Us Today!</p>
        <p className="text-gray-300 mb-1">Hallifax Energy and Mining</p>
        <p className="text-gray-300 mb-1">P O Box 20711</p>
        <p className="text-gray-300 mb-1">Accra</p>
        <p className="text-gray-300 mb-1">Email : info@miningcompany.com</p>
        <p className="text-gray-300">Phone : +233507091754</p>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
        <ul className="text-gray-300 space-y-2">
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Mining Industry Insights
            </a>
          </li>
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Technology in Mining
            </a>
          </li>
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Environmental Responsibility
            </a>
          </li>
          <li className="border-b border-gray-700 pb-1">
            <a href="#" className="hover:underline">
              Careers at Our Company
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

const Footer = () => (
  <Suspense fallback={<div>Loading footer...</div>}>
    <FooterContent />
  </Suspense>
);

export default memo(Footer);
