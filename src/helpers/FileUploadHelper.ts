import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';
import * as fs from 'fs';

cloudinary.config({
  cloud_name: 'dvsvlrkcr',
  api_key: '321283462769965',
  api_secret: 'IxkLhhL9Gg99toraK6pzo1xPF3U'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
