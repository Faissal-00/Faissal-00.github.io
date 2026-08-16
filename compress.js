const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './src/assets/images/gallery';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.match(/\.(jpg$|jpeg$|png$|JPG$|JPEG$|PNG$)/)) {
            const filePath = path.join(directory, file);
            const outputpath = path.join(directory, 'optimized_' + file);
            
            sharp(filePath)
                .resize(800) // Resizes max width to 800px (perfect for web)
                .jpeg({ quality: 80 }) // Compresses quality down to a lightweight size
                .toFile(outputpath)
                .then(() => console.log('Optimized:', file))
                .catch(err => console.log('Error:', err));
        }
    });
});