import React from "react";
import logo from "./logo.png";

const ThreatResponder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex justify-center py-12 px-4">

      {/* MAIN POSTER CARD */}
      <div className="bg-gradient-to-br from-purple-950 to-pink-500 max-w-4xl w-full rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.6)] p-6 text-white">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            <span className="text-red-500">+</span>{" "}
            <span className="text-red-500">Threat</span>
            <span className="text-gray-200">RESPONDER</span>
          </h1>
          <p className="text-sm text-gray-300 mt-2 italic">
            Gain 361° Threat Visibility™ of Your Enterprise
          </p>
        </div>

        {/* TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* LEFT IMAGE */}
          <div className="bg-[#223047] rounded-md p-3">
            <img
              src="https://images.unsplash.com/photo-1600267165477-6d4cc741b379"
              alt="Threat Responder"
              className="rounded-md w-full object-cover"
            />
            <p className="text-xs text-center mt-2 text-gray-300">
              ThreatRESPONDER™ Platform – Customizable Capabilities
            </p>
          </div>

          {/* BENEFITS */}
          <div className="bg-[#223047] rounded-md p-4 text-sm">
            <h3 className="font-semibold mb-2 text-red-400">
              BENEFITS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Prevent costly cyber attacks</li>
              <li>Gain compliance and audit readiness</li>
              <li>Reduce cost of security operations</li>
              <li>Improve visibility and response</li>
              <li>Strengthen enterprise defense</li>
              <li>Protect intellectual property</li>
              <li>Enhance brand trust</li>
            </ul>
          </div>
        </div>

        {/* DASHBOARD IMAGE */}
        <div className="bg-[#223047] rounded-md p-3 mt-4">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Dashboard"
            className="rounded-md w-full"
          />
          <p className="text-xs text-center mt-2 text-gray-300">
            ThreatRESPONDER™ Security Dashboard
          </p>
        </div>

        {/* CAPABILITIES */}
        <div className="bg-[#223047] rounded-md p-4 mt-4 text-sm">
          <h3 className="font-semibold mb-2 text-red-400">
            CAPABILITIES / USE CASES
          </h3>
          <p className="text-gray-200 leading-relaxed">
            ThreatRESPONDER™ platform detects, responds, and prevents
            advanced cyber threats across multiple attack vectors.
            It provides integrated analytics, intelligence, and
            automation to identify and neutralize threats in real time.
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
            <li>Threat intelligence & correlation</li>
            <li>Detection & response automation</li>
            <li>Data forensics & analytics</li>
            <li>User behavior analysis</li>
            <li>Advanced reporting & dashboards</li>
          </ul>
        </div>

        {/* FOOTER */}
        <div className="mt-6 bg-gray-300 rounded-md p-4 text-gray-800 text-xs">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" className="h-10"/>
            <p>support@kevlardefense.com  |  +44 734 544 3339</p>
          </div>

          <div className="mt-2 text-[14px] text-gray-600 leading-relaxed">
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThreatResponder;
