import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { renderSeoHead } from '@/lib/seo';

export function RouteSeo() {
  const [path] = useLocation();
  useEffect(() => {
    document.head.querySelectorAll('[data-seo]').forEach((tag) => tag.remove());
    document.head.insertAdjacentHTML('beforeend', renderSeoHead(path));
  }, [path]);
  return null;
}
