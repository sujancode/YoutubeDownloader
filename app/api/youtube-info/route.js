import { NextResponse } from 'next/server';
import ytdl from 'ytdl-core';

// API route to handle POST requests for YouTube video info
export async function POST(request) {
  // Parse the request body to get the video URL
  const { url: videoUrl } = await request.json();

  if (!videoUrl) {
    return NextResponse.json({ error: 'Please provide a valid YouTube video URL' }, { status: 400 });
  }

  try {
    // Get video information using ytdl-core
    const info = await ytdl.getInfo(videoUrl);

    // Extract video details
    const videoDetails = info.videoDetails;

    // Extract available formats
    const formats = info.formats;

    // Sort all formats by quality (resolution)
    const sortedFormats = formats
      .filter(format => format.height) // Ensure it's a video format by checking for height
      .sort((a, b) => (b.height || 0) - (a.height || 0)); // Sort by video height/resolution

    // Get the top 5 video formats by resolution
    const selectedFormats = sortedFormats.slice(0, 5);

    // Prepare the response object
    const response = {
      title: videoDetails.title,
      duration: `${Math.floor(videoDetails.lengthSeconds / 60)}:${videoDetails.lengthSeconds % 60} minutes`,
      thumbnail: videoDetails.thumbnails[videoDetails.thumbnails.length - 1]?.url, // Highest quality thumbnail
      formats: selectedFormats.map((format) => ({
        quality: format.qualityLabel,
        fileType: format.container,
        codec: format.codecs,
        url: format.url,
        fileSize: format.contentLength ? (format.contentLength / (1024 * 1024)).toFixed(2) + ' MB' : 'Unknown',
      })),
    };

    // Return the video information as JSON
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching video info:', error);
    return NextResponse.json({ error: 'Failed to fetch video information' }, { status: 500 });
  }
}
