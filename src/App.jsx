import React from "react";
import {
  Shield,
  Settings,
  Bug,
  Bell,
  Lock,
  RefreshCcw,
  Wrench,
  FileCheck,
  LifeBuoy,
  CloudOff,
} from "lucide-react";
import logo from "./logo.png";

const App = () => {
  return (
    /* FULL PAGE BACKGROUND */
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-400 flex justify-center py-14 px-4">

      {/* MAIN CARD */}
      <div
        className="
          bg-white/95 backdrop-blur
          max-w-5xl w-full
          rounded-2xl overflow-hidden
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          ring-1 ring-white/20
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <img src={logo} alt="Bashtell Logo" className="h-10 object-contain" />
          <p className="text-sm text-pink-500 font-medium">
            www.kevlardefense.com
          </p>
        </div>

        {/* Hero */}
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-purple-950 to-pink-400 text-white">
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3">
              Managed Firewall Service
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              BASHTell’s Managed Firewall Service ensures your network is
              protected against malicious traffic, unauthorized access,
              and evolving cyber threats through expert configuration,
              monitoring, and maintenance.
            </p>
          </div>

          {/* UPDATED IMAGE */}
          <div
            className="min-h-[260px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7')",
            }}
          />
        </div>

        {/* What We Do */}
        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold text-purple-950 mb-4">
            What We Do
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
            <ServiceBox icon={<Shield />} label="Secure Firewall Policy Creation" />
            <ServiceBox icon={<Settings />} label="Firewall Configuration & Testing" />
            <ServiceBox icon={<Lock />} label="Next-Gen Firewall Setup & Management" />
            <ServiceBox icon={<Bell />} label="24×7 Monitoring & Alerting" />
            <ServiceBox icon={<Bug />} label="Firewall Security Tuning" />

            <ServiceBox icon={<RefreshCcw />} label="Configuration Changes" />
            <ServiceBox icon={<Wrench />} label="Maintenance Updates" />
            <ServiceBox icon={<FileCheck />} label="Compliance Reporting" />
            <ServiceBox icon={<LifeBuoy />} label="Troubleshooting & Support" />
            <ServiceBox icon={<CloudOff />} label="Disaster Recovery" />
          </div>
        </div>

        {/* Customize Section */}
        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold text-purple-950 mb-3">
            Customize Your Solution
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Our managed firewall services are scalable and tailored to
            organizations of all sizes. Flexible pricing models ensure
            maximum security without unnecessary overhead.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              <strong>Visibility:</strong> Global insight into emerging threats.
            </li>
            <li>
              <strong>Efficiency:</strong> Security operations handled by experts.
            </li>
            <li>
              <strong>Data Protection:</strong> 24×7 firewall monitoring and response.
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-purple-950 to-pink-400 text-white px-6 py-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-semibold">
            Sleep easy knowing Bashtell has your back!
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

/* ---------- Reusable Component ---------- */

const ServiceBox = ({ icon, label }) => (
  <div className="border rounded-xl p-3 flex flex-col items-center gap-2 text-center shadow-sm hover:shadow-xl transition">
    <div className="text-pink-500">
      {icon}
    </div>
    <p className="text-gray-700">{label}</p>
  </div>
);

export default App;
