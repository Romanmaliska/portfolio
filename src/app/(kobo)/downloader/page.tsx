import { GiBookshelf } from 'react-icons/gi';
import BooksList from '@/app/(kobo)/downloader/BookList';

export default function Home() {
  return (
    <>
      <header className="flex items-center place-content-center gap-4 p-6">
        <GiBookshelf size={24} />
        <h1 className="text-2xl">Books Downloader</h1>
      </header>
      <main>
        <BooksList />
      </main>
    </>
  );
}
