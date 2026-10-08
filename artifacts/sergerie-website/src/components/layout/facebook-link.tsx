import type { MouseEventHandler } from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FACEBOOK_URL } from '@/lib/company';
import { cn } from '@/lib/utils';

export function FacebookLink({ className, iconClassName, iconOnly = false, onClick }: {
  className?: string;
  iconClassName?: string;
  iconOnly?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Armoire Belle-Vue sur Facebook (nouvel onglet)"
      onClick={onClick}
      className={cn('group inline-flex min-h-11 items-center gap-3 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50] focus-visible:ring-offset-2', className)}
    >
      <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#D71920] text-white transition-colors group-hover:bg-[#B51218]', iconClassName)}>
        <FaFacebookF size={20} aria-hidden="true" />
      </span>
      {!iconOnly && <span>Facebook</span>}
    </a>
  );
}
