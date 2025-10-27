'use client';

import { usePathname } from 'next/navigation';

import Socialbar from '@/app/components/socialbar';

export default function ConditionalSocialbar() {
  const pathname = usePathname();
  
  // Hide socialbar on contact page since it's displayed centered there
  if (pathname === '/contact') {
    return null;
  }
  
  return <Socialbar />;
}

