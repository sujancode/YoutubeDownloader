// app/api/facebook-video/route.js
import { NextResponse } from 'next/server';
import fbDownloader from 'fb-video-downloader';

export async function POST(request) {
  try {
    const { url } = await request.json();

    // Validate URL (ensure it looks like a valid Facebook video URL)
    if (!url.includes('facebook.com') || !url.includes('video')) {
      return NextResponse.json({ error: 'Invalid Facebook video URL' }, { status: 400 });
    }

    // Fetch video download links
    const videoData = await fbDownloader.getInfo(url);

    if (!videoData) {
      return NextResponse.json({ error: 'Unable to extract video from URL' }, { status: 500 });
    }

    // Extract video download links (SD and HD links)
    const result = {
      title: videoData.title || 'Facebook Video',
      downloadLinks: videoData.download.map(link => ({
        quality: link.quality || 'Unknown Quality',
        url: link.url,
      })),
    };

    // Log the result to the console for testing
    console.log('Facebook Video Data:', result);

    // Return the result as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing Facebook video URL:', error);
    return NextResponse.json({ error: 'Error processing Facebook video URL' }, { status: 500 });
  }
}
