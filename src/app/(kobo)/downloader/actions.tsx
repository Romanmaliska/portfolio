'use server';

const baseUrl = 'https://www.googleapis.com/drive/v3/files';

export const getBooks = async () => {
  if (!process.env.GOOGLE_DRIVE_API_KEY || !process.env.GOOGLE_DRIVE_FILE_ID)
    return null;

  const url = `${baseUrl}/?q=${process.env.GOOGLE_DRIVE_FILE_ID}&key=${process.env.GOOGLE_DRIVE_API_KEY}`;
  const books = await fetch(url, { cache: 'no-store' });
  return books.json();
};
