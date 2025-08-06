import { Metadata, Viewport } from 'next';

// This provides the head metadata to prevent Dark Reader from affecting the site
export const darkReaderMetadata: Metadata = {
  // Use other standard metadata properties
  applicationName: 'HackHertz', // Signal to Dark Reader indirectly
};

// Viewport properties that were previously in metadata
export const darkReaderViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#111' },
  ],
  colorScheme: 'dark light', // Signal that we support dark mode natively
};
