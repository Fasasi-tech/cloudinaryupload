const cloudinary = require('../services/cloudinary')

const uploadBase64Image = async (req, res) => {
  try {
    const { base64 } = req.body;

    if (!base64) {
      return res.status(400).json({ error: 'Base64 string is required' });
    }

    const result = await cloudinary.uploader.upload(base64, {
      folder: 'rfqDocuments',
    });

    return res.status(200).json({
      message: 'Upload successful',
      fileUrl: result.secure_url,
     // publicId: result.public_id
    });
  } catch (error) {
    console.error('Upload to Cloudinary failed:', error.message);
    res.status(500).json({ error: 'Cloudinary upload failed' });
  }
};

module.exports = { uploadBase64Image };
