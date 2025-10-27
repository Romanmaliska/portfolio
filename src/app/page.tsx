import { ViewTransition } from 'react';
import About from '@/app/components/about';

export default function HomePage() {
  return (
    <ViewTransition>
      <About />
    </ViewTransition>
  );
}
