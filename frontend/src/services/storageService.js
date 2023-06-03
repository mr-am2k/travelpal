import { storage } from "../firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { v4 } from "uuid";

const uploadFile = async (folder, file) => {
  const fileRef = ref(storage, `${folder}/${file.name + v4()}`);
  const snapshot = await uploadBytes(fileRef, file);
  const url = await getDownloadURL(snapshot.ref);

  return url.toString();
};

const uploadFiles = async (folder, files) => {
  const uploadPromises = files.map(async (files) => {
    const uploadFiles = await uploadFile(folder, files);
    return uploadFiles;
  });
  const uploadedFiles = await Promise.all(uploadPromises);

  return uploadedFiles;
};

export const storageService = {
  upload: (folder, image) => uploadFile(folder, image),
  uploadFiles: (folder, images) => uploadFiles(folder, images),
};
