'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.adoretech.cloud';
const VISITOR_ID_KEY = 'visitor-count-id';

function getVisitorId() {
  try {
    const existingId = window.localStorage.getItem(VISITOR_ID_KEY);
    if (existingId) return existingId;

    const visitorId = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_ID_KEY, visitorId);
    return visitorId;
  } catch {
    return crypto.randomUUID();
  }
}

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    void fetch(`${API_URL}/api/visits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Visitor-Id': getVisitorId(),
      },
      credentials: 'include',
      body: JSON.stringify({ page: pathname }),
    }).catch(() => undefined);
  }, [pathname]);

  return null;
}
