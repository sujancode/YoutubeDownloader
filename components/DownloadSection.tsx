import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/components-ui-button';

interface DownloadOption {
  format: string;
  quality?: string;
  size: string;
  link: string;
}

interface DownloadSectionProps {
  audioOptions?: DownloadOption[];
  videoOptions?: DownloadOption[];
  thumbnail: string;
  title: string;
  artists: string;
  duration: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({
  audioOptions = [],
  videoOptions = [],
  thumbnail,
  title,
  artists,
  duration
}) => {
  console.log(videoOptions)
  const renderDownloadRow = (option: DownloadOption, index: number) => (
    <tr key={index} className="border-b border-gray-200">
      <td className="py-2 px-4">
        {option.format}
        {option.quality && (
          <span className={`ml-2 px-1 text-xs font-bold ${option.quality === '4K' ? 'bg-red-500' : 'bg-blue-500'} text-white rounded`}>
            {option.quality}
          </span>
        )}
      </td>
      <td className="py-2 px-4">{option.size}</td>
      <td className="py-2 px-4">
        <Button
          onClick={() => window.open(option.link, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded"
        >
          <Download className="w-4 h-4 mr-2" />
          DOWNLOAD
        </Button>
      </td>
    </tr>
  );

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section: Video Info */}
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <img src={thumbnail} alt={title} className="w-full rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">{artists}</p>
            <p className="text-gray-500">Duration: {duration}</p>
          </div>
        </div>

        {/* Right Section: Download Options */}
        <div className="w-full md:w-2/3">
          {videoOptions.length > 0 && (
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <h3 className="bg-gray-200 px-4 py-2 font-semibold text-left">Video Formats</h3>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left">Format</th>
                    <th className="py-2 px-4 text-left">Size</th>
                    <th className="py-2 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {videoOptions.map(renderDownloadRow)}
                </tbody>
              </table>
            </div>
          )}

          {audioOptions.length > 0 && (
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <h3 className="bg-gray-200 px-4 py-2 font-semibold text-left">Audio Formats</h3>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left">Format</th>
                    <th className="py-2 px-4 text-left">Size</th>
                    <th className="py-2 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {audioOptions.map(renderDownloadRow)}
                </tbody>
              </table>
            </div>
          )}

          {/* If no options are available */}
          {audioOptions.length === 0 && videoOptions.length === 0 && (
            <div className="bg-white rounded-lg p-4 text-center">
              No download options available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
