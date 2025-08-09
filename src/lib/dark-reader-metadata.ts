import { Metadata, Viewport } from 'next';

// This provides the head metadata to prevent Dark Reader from affecting the site
export const darkReaderMetadata: Metadata = {
  // Use other standard metadata properties
  applicationName: 'HackHertz',
  // Add meta tag to specifically prevent Dark Reader
  other: {
    'darkreader-lock': 'true', // Tell Dark Reader to disable for this site
    'color-scheme': 'dark', // Explicitly tell browsers we're already dark-themed
    'darkreader': 'disable', // Another way to signal Dark Reader
    'darkreader-mode': 'bypass' // Yet another signal to Dark Reader
  }
};

// Viewport properties that were previously in metadata
export const darkReaderViewport: Viewport = {
  themeColor: '#050215', // Use our dark background color
  colorScheme: 'dark', // Signal that we're already in dark mode
};
