import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-2">yt1d.com</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="/facebook-video-downloader" className="hover:text-blue-500">
                  Facebook Video Downloader
                </Link>
              </li>
              <li>
                <Link href="/instagram-downloader" className="hover:text-blue-500">
                  Instagram Downloader
                </Link>
              </li>
              <li>
                <Link href="/twitter-video-downloader" className="hover:text-blue-500">
                  Twitter Video Downloader
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/youtube-thumbnail-downloader" className="hover:text-blue-500">
                  YouTube Thumbnail Downloader
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Terms of Use</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="/terms" className="hover:text-blue-500">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="hover:text-blue-500">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Privacy Policy</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="/privacy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © Copyright yt1d.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
