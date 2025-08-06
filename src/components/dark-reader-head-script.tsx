'use client';

export function DarkReaderHeadScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // This script attempts to prevent Dark Reader from modifying SVG elements
          (function() {
            try {
              // Add a style element that prevents Dark Reader from targeting SVGs
              const style = document.createElement('style');
              style.textContent = 'svg { -darkreader-inline-stroke: none !important; -darkreader-inline-fill: none !important; }';
              document.head.appendChild(style);
              
              // Try to detect Dark Reader and disable it for this site
              if (window.DarkReader) {
                window.DarkReader.disable();
              }
            } catch(e) {
              console.warn('Error in Dark Reader prevention script:', e);
            }
          })();
        `,
      }}
    />
  );
}
