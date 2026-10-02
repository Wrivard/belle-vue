import { useSyncExternalStore } from 'react';

// Clé sessionStorage : "abv-carte-google" ; valeur "1" = carte activée. Durée : onglet courant seulement.
const KEY = 'abv-carte-google';
let memory: boolean | undefined;
const listeners = new Set<() => void>();

function read(): boolean {
  if (memory !== undefined) return memory;
  try {
    memory = window.sessionStorage.getItem(KEY) === '1';
  } catch {
    /* stockage indisponible : mémoire seulement */
    memory = false;
  }
  return memory;
}

function emit() {
  listeners.forEach((l) => l());
}

export function setMapConsent(value: boolean) {
  memory = value;
  try {
    if (value) window.sessionStorage.setItem(KEY, '1');
    else window.sessionStorage.removeItem(KEY);
  } catch {
    /* ignoré : la mémoire reste fonctionnelle */
  }
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useMapConsent() {
  return useSyncExternalStore(subscribe, read, () => false);
}

export function focusMapSection() {
  const el = document.getElementById('carte');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => el.focus({ preventScroll: true }), 400);
  }
}
