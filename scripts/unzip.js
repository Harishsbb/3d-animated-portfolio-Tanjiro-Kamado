const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const zipPath = path.resolve(__dirname, '..', 'tanjiro_frames1.zip');
const publicDir = path.resolve(__dirname, '..', 'public');
const destPath = path.resolve(publicDir, 'frames');

function main() {
  console.log('=== Automated Frame Extraction ===');
  
  if (!fs.existsSync(zipPath)) {
    console.error(`Error: tanjiro_frames1.zip not found in workspace root: ${zipPath}`);
    process.exit(1);
  }

  // Create public directory
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Clean public/frames/ first to remove all old frames
  console.log(`Cleaning target folder: ${destPath}...`);
  if (fs.existsSync(destPath)) {
    fs.rmSync(destPath, { recursive: true, force: true });
  }
  fs.mkdirSync(destPath, { recursive: true });

  // Temporary path for extraction
  const tempExtractPath = path.resolve(__dirname, '..', 'temp_extracted_frames');
  if (fs.existsSync(tempExtractPath)) {
    fs.rmSync(tempExtractPath, { recursive: true, force: true });
  }
  fs.mkdirSync(tempExtractPath, { recursive: true });

  console.log(`Extracting zip to temporary folder: ${tempExtractPath}...`);
  try {
    // Run PowerShell command to extract zip on Windows
    execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${tempExtractPath}' -Force"`, { stdio: 'inherit' });
    console.log('ZIP extraction completed.');
    
    // Look for image files. Sometimes the zip contains a root folder, sometimes files are flat.
    function locateImages(dir) {
      let results = [];
      const list = fs.readdirSync(dir);
      list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          results = results.concat(locateImages(fullPath));
        } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
          results.push(fullPath);
        }
      });
      return results;
    }

    console.log('Scanning extracted files for frame images...');
    const images = locateImages(tempExtractPath);
    console.log(`Found ${images.length} images.`);

    if (images.length === 0) {
      console.error('No images found in the zip archive!');
      process.exit(1);
    }

    // Move all images to public/frames/ with uniform naming if needed, or keeping original names if they match frame_xxx.jpg
    // Let's sort them to ensure we process them in correct order
    images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    console.log('Copying and renaming images to public/frames/...');
    images.forEach((imgPath, index) => {
      const padNum = String(index + 1).padStart(3, '0');
      const ext = path.extname(imgPath);
      // We will normalize names to frame_001.jpg, frame_002.jpg, etc. as required
      const newName = `frame_${padNum}.jpg`; // convert png/jpeg to .jpg names as expected by canvas hero
      const targetPath = path.join(destPath, newName);
      fs.copyFileSync(imgPath, targetPath);
    });

    console.log(`Successfully imported ${images.length} frames into public/frames/`);

    // Write components/framesConfig.ts so CinematicHero dynamically adapts to the frame count
    const configPath = path.resolve(__dirname, '..', 'components', 'framesConfig.ts');
    fs.writeFileSync(configPath, `export const TOTAL_FRAMES = ${images.length};\n`);
    console.log(`Updated components/framesConfig.ts with TOTAL_FRAMES = ${images.length}`);

    // Clean up temporary folder
    fs.rmSync(tempExtractPath, { recursive: true, force: true });
    console.log('Cleaned up temporary extraction files.');
    
  } catch (error) {
    console.error('Failed to extract ZIP file using PowerShell:', error);
    process.exit(1);
  }
}

main();
