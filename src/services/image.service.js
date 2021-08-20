import { instance } from './instance';

export const postImage = (format, base64_image) =>
  instance.post('form', { format, base64_image });
