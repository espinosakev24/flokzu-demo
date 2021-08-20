export const fileSize = file => {
  let fileSize = 0;

  if (file.size > 1024 * 1024) {
    fileSize =
      (Math.round((file.size * 100) / (1024 * 1024)) / 100).toString() + 'MB';
  } else {
    fileSize = (Math.round((file.size * 100) / 1024) / 100).toString() + 'KB';
  }
  return fileSize;
};
