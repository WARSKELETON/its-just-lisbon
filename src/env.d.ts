/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    phCapture?: (eventName: string, props?: Record<string, unknown>) => void;
  }
}

export {};
