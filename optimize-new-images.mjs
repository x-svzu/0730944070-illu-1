import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const imagesDir = '/home/z/my-project/public/images';
const files = await readdir(imagesDir);

console.log('Optimizing images...\n');

for (const file of files) {
  if (!file.match(/\.(jpg|jpeg)$/i)) continue;
  
  const inputPath = join(imagesDir, file);
  const outputPath = join(imagesDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
  
  const inputStats = await stat(inputPath);
  const inputSize = inputStats.size;
  
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .toFile(outputPath);
    
    const outputStats = await stat(outputPath);
    const outputSize = outputStats.size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    
    console.log(`${file}: ${(inputSize/1024).toFixed(1)}KB → ${(outputSize/1024).toFixed(1)}KB (${savings}% smaller)`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

console.log('\nDone!');
