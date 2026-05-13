'use client';

import { Download } from 'lucide-react';

export default function DownloadButton() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out print:hidden"
      aria-label="Download CV"
      title="Download CV as PDF"
    >
      <Download size={20} className="text-gray-600 mr-2" />
      Download PDF
    </button>
  );
}
