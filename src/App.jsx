import React from "react";
import {
  Scale,
  Building2,
  HeartPulse,
  Lightbulb,
  Landmark,
  Banknote,
} from "lucide-react";
import logo from "./logo.png";

const App = () => {
  return (
    /* FULL PAGE BACKGROUND */
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-400 flex justify-center py-12 px-4">

      {/* MAIN CARD */}
      <div className="bg-white/95 backdrop-blur max-w-5xl w-full shadow-2xl rounded-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kevlar Defense Logo"
              className="h-10 object-contain"
            />
          </div>
          <p className="text-sm text-pink-500 font-medium">
            www.kevlardefense.com
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-purple-950 to-pink-400 text-white">
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3">
              Who is Kevlar Defense?
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              Kevlar Defense is your trusted one-stop shop for Cyber Security
              Managed Services, Professional Services, and IT consulting.
              We help organizations across the globe stay protected in
              today’s cyber world.
            </p>
          </div>

          <div
            className="min-h-[240px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('./src/n.jpg')",
            }}
          />
        </div>

        {/* Commitment */}
        <div className="px-6 py-6">
          <h3 className="font-semibold text-lg mb-4 text-purple-950">
            Our Commitment
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <p>✔ Proactive cyber security approach</p>
            <p>✔ Built by experts who understand business needs</p>
            <p>✔ Reliable support whenever you need it</p>
          </div>
        </div>

        {/* Customer Verticals */}
        <div className="px-6 py-6 border-t">
          <h3 className="font-semibold text-lg mb-4 text-purple-950">
            Customer Verticals
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5 text-center text-xs">
            <Vertical icon={<Banknote />} label="Banks & Credit" />
            <Vertical icon={<Scale />} label="Law Firms" />
            <Vertical icon={<Building2 />} label="Non-Profit" />
            <Vertical icon={<HeartPulse />} label="Healthcare" />
            <Vertical icon={<Lightbulb />} label="Energy" />
            <Vertical icon={<Landmark />} label="State & Local" />
          </div>
        </div>

        {/* Solutions */}
        <div className="px-6 py-6 border-t">
          <h3 className="font-semibold text-lg mb-4 text-purple-950">
            Kevlar Defense Solutions
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <SolutionBox
              title="Professional Services"
              items={[
                "Vulnerability Management",
                "Penetration Testing",
                "SIEM Management",
                "Deployment Assistance",
                "Vulnerability Scanning",
              ]}
            />

            <SolutionBox
              title="Managed Services"
              items={[
                "Risk Assessments",
                "Managed Firewall Service",
                "Gap Analysis",
                "Endpoint Detection & Response",
              ]}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-purple-950 to-pink-400 text-white px-6 py-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-semibold">
            Sleep easy knowing Kevlar Defense has your back!
          </p>
          <div className="text-sm space-y-1">
            <p>📧 support@kevlardefense.com</p>
            <p>📞 +44 734 544 3339</p>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ---------- Reusable Components ---------- */

const Vertical = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center text-pink-500">
      {icon}
    </div>
    <p className="text-gray-700">{label}</p>
  </div>
);

const SolutionBox = ({ title, items }) => (
  <div className="border rounded-xl overflow-hidden shadow-sm">
    <div className="bg-purple-950 text-white px-4 py-2 font-semibold">
      {title}
    </div>
    <ul className="p-4 text-sm list-disc list-inside space-y-1 text-gray-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default App;
