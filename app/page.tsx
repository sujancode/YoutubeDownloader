'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/components-ui-input';
import { Button } from '@/components/components-ui-button';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/footer';
import { Search, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/components-ui-sheet';
import DownloadSection from '@/components/DownloadSection';

interface DownloadOption {
  format: string;
  quality?: string;
  size: string;
  link: string;
}

interface VideoData {
  title: string;
  thumbnail: string;
  artists: string;
  duration: string;
  audioOptions: DownloadOption[];
  videoOptions: DownloadOption[];
}

export default function YouTubeDownloader() {
  const [videoData, setVideoData] = useState<VideoData | null>(null); // Add the VideoData type
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (url: string) => {
    if (!url) {
      alert('Please enter a YouTube URL.');
      return;
    }
  
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/youtube-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
        redirect: 'follow', // Ensure redirects are followed
      });
  
      const data = await response.json();
      if (response.ok) {
        setVideoData({
          title: data.title,
          thumbnail: data.thumbnail,
          artists: '', // You can modify this according to your metadata
          duration: data.duration,
          audioOptions: data.formats.filter(
            (format: { fileType: string }) => format.fileType.includes('audio')
          ).map((format: any) => ({
            format: 'Audio',
            quality: format.qualityLabel || 'Unknown Quality',
            size: format.contentLength ? `${(format.contentLength / 1024 / 1024).toFixed(2)} MB` : 'Unknown',
            link: format.url,
          })),
          videoOptions: data.formats.filter(
            (format: { fileType: string }) => format.fileType.includes('video')
          ).map((format: any) => ({
            format: 'Video', // Labeling as Video
            quality: format.qualityLabel || 'Unknown Quality', // Include resolution if available
            size: format.contentLength ? `${(format.contentLength / 1024 / 1024).toFixed(2)} MB` : 'Unknown',
            link: format.url,
          })),
        });
      } else {
        setError(data.error || 'Failed to fetch video data.');
      }
    } catch (err) {
    console.log(err)
      setError('An error occurred while fetching the video data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 text-gray-800">
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold text-blue-500">
              yt1d.com
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm justify-center flex-grow">
              {/* Add MenuItems here */}
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {/* Add mobile MenuItems here */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4 text-center">YouTube Video Downloader</h1>
            <p className="text-center text-gray-600 mb-8">
              Download online videos using yt1d.com
            </p>
            <div className="flex justify-center max-w-3xl mx-auto">
              <div className="flex w-full max-w-3xl">
                <Input
                  className="flex-grow rounded-r-none border-r-0 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Paste YouTube video link here"
                />
                <Button
                  onClick={() => handleDownload((document.querySelector('input') as HTMLInputElement).value)}
                  className="bg-blue-500 text-white hover:bg-blue-600 transition-all px-8 rounded-l-none"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </>
                  )}
                </Button>
              </div>
            </div>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            {videoData && (
              <DownloadSection
                audioOptions={videoData.audioOptions}
                videoOptions={videoData.videoOptions}
                thumbnail={videoData.thumbnail}
                title={videoData.title}
                artists={videoData.artists}
                duration={videoData.duration}
              />
            )}
          </div>
        </section>

        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}
