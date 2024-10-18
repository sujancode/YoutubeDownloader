const ytdl = require('ytdl-core');

// YouTube video URL to fetch information for
const videoUrl = 'https://www.youtube.com/watch?v=1kJeq1PuaOM';  // Replace with any valid YouTube video URL

async function getVideoInfo(url) {
  try {
    // Get video information using ytdl-core
    const info = await ytdl.getInfo(url);

    // Extract video details
    const videoDetails = info.videoDetails;
    console.log(`Title: ${videoDetails.title}`);
    console.log(`Duration: ${Math.floor(videoDetails.lengthSeconds / 60)}:${videoDetails.lengthSeconds % 60} minutes`);
    console.log(`Thumbnail: ${videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url}`); // Highest quality thumbnail

    // Extract available formats
    const formats = info.formats;

    // Sort all formats by quality (resolution)
    const sortedFormats = formats
      .filter(format => format.height) // Ensure it's a video format by checking for height
      .sort((a, b) => (b.height || 0) - (a.height || 0)); // Sort by video height/resolution

    // Get the top 5 video formats by resolution
    const selectedFormats = sortedFormats.slice(0, 5);

    // Display the top 5 video formats
    console.log('\nTop 5 Highest Quality Video Formats:');
    selectedFormats.forEach((format, index) => {
      console.log(`\nFormat ${index + 1}:`);
      console.log(`  Quality: ${format.qualityLabel}`);
      console.log(`  File Type: ${format.container}`);
      console.log(`  Codec: ${format.codecs}`);
      console.log(`  Download URL: ${format.url}`);
      console.log(`  File Size: ${format.contentLength ? (format.contentLength / (1024 * 1024)).toFixed(2) + ' MB' : 'Unknown'}`);
    });
  } catch (err) {
    console.error(`Error fetching video info: ${err.message}`);
  }
}

// Run the function with the specified YouTube video URL
getVideoInfo(videoUrl);
