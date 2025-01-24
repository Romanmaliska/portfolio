import { IoMdCloudDownload } from 'react-icons/io';

import { getBooks } from './actions';

type BookFiles = {
  files: [
    {
      mimeType: string;
      id: string;
      name: string;
    },
  ];
};

export default async function BooksList() {
  const { files }: BookFiles = (await getBooks()) || { files: [] };

  return (
    <ul>
      {files.map(({ id, name }) => (
        <li
          className="flex gap-4 items-center justify-between px-6 min-h-20"
          key={id}
        >
          <h2>{name}</h2>
          <a
            className="flex gap-2 items-center border rounded p-1 cursor-pointer"
            href={`https://drive.google.com/uc?export=download&id=${id}`}
            download
          >
            <IoMdCloudDownload size={24} />
            Download
          </a>
        </li>
      ))}
    </ul>
  );
}
