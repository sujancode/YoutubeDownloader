import { FC, ReactElement } from 'react';
import { Download, Zap, Layers, Globe, Shield, FileText } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  icon: ReactElement;
};

const features: Feature[] = [
  {
    title: "No Downloads, No Hassles",
    description: "With yt1d, a YouTube video downloader website, everything operates online. Forget about cluttering your device with additional software, download YouTube videos easily and safely from your browser!",
    icon: <Download className="w-12 h-12 mb-4 text-blue-500" />,
  },
  {
    title: "Versatility in Formats",
    description: "Whether it's MP4 for video lovers, MP3 for music fans, or other formats, yt1d supports a variety of file types to meet your specific needs, and our website allows you to download high-quality YouTube videos in various resolutions, including HD, 1080p, 2K, and even 4K.",
    icon: <Layers className="w-12 h-12 mb-4 text-blue-500" />,
  },
  {
    title: "Absolutely Free",
    description: "Enjoy unlimited YouTube video downloads without spending a dime. yt1d is committed to providing a safe and cost-free service for all users.",
    icon: <Shield className="w-12 h-12 mb-4 text-blue-500" />,
  },
  {
    title: "Fast Downloads",
    description: "We know your time is valuable. That's why yt1d ensures fast and efficient download speeds to get your favorite YouTube videos in no time.",
    icon: <Zap className="w-12 h-12 mb-4 text-blue-500" />,
  },
  {
    title: "No Sign-up Required",
    description: "Jump straight to downloading without the hassle of registration or log-ins. Your ease of access and privacy are our top priorities.",
    icon: <FileText className="w-12 h-12 mb-4 text-blue-500" />,
  },
  {
    title: "Cross-Platform Compatibility",
    description: "Whether you use a PC, Mac, Android, or iOS device, yt1d works seamlessly across all devices. All you need is a web browser to get started.",
    icon: <Globe className="w-12 h-12 mb-4 text-blue-500" />,
  },
];

const FeaturesSection: FC = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <p className="mb-8 text-center">
        YouTube is the biggest YouTube video sharing platform in the world, and provides an excellent experience for users to upload, view, and share videos. What it can't provide is a YouTube video download. That's why yt1d is here to help you out!
      </p>
      <p className="mb-8 text-center">
        With our YouTube video downloader, you can easily search for your favorite YouTube videos and download them for free! You can download YouTube MP4, YouTube MP3, YouTube HD MP4, and other formats with high-quality options like 1080p, 2K, and even 4K. Compatible with Mac, Android, and Windows.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">The Best Free Online YouTube Downloader</h2>
      <p className="text-center mb-8">
        The usage of our YouTube video downloader is simple! Just visit our website - yt1d.com on your devices and enjoy free content.
      </p>
      <p className="text-center mb-8">
        Want to know more? You can follow our download tips below.
      </p>
      <h2 className="text-2xl font-bold mb-4">How to download YouTube videos online via YT1D</h2>
      <ol className="list-decimal list-inside space-y-2 mb-8 pl-4">
        <li>Copy the YouTube link of the video and paste it into the input line.</li>
        <li>Click "Download" and wait for the video to be ready.</li>
        <li>Select the desired download options and click "Download".</li>
      </ol>
      <h2 className="text-2xl font-bold mb-4">How to Use YT1D downloader Short Domain?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Open YouTube URL</h3>
          <p className="text-sm text-gray-600">Open the target video in YouTube that you want to download.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Add "pp" before the video URL</h3>
          <p className="text-sm text-gray-600">Add "pp" before the video URL to start the downloading process.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">YT to MP4 will launch quickly</h3>
          <p className="text-sm text-gray-600">After pressing the "Enter" button, you will be redirected to the page with several download options.</p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
