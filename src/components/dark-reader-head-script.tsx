'use client';

export function DarkReaderHeadScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // This script runs before React hydration to disable Dark Reader completely
          (function() {
            try {
              // Add a meta tag to tell Dark Reader to skip this site
              const meta = document.createElement('meta');
              meta.name = 'darkreader-lock';
              meta.content = 'true';
              document.head.appendChild(meta);
              
              // Add CSS that disables Dark Reader effects
              const style = document.createElement('style');
              style.textContent = \`
                /* Force disable Dark Reader effects */
                html, body, *, *::before, *::after {
                  -darkreader-inline-bgcolor: initial !important;
                  -darkreader-inline-bgimage: initial !important;
                  -darkreader-inline-border: initial !important;
                  -darkreader-inline-border-bottom: initial !important;
                  -darkreader-inline-border-left: initial !important;
                  -darkreader-inline-border-right: initial !important;
                  -darkreader-inline-border-top: initial !important;
                  -darkreader-inline-boxshadow: initial !important;
                  -darkreader-inline-color: initial !important;
                  -darkreader-inline-fill: initial !important;
                  -darkreader-inline-filter: initial !important;
                  -darkreader-inline-stroke: initial !important;
                  -darkreader-inline-outline: initial !important;
                }
                
                /* Target Dark Reader specifically */
                html {
                  --darkreader-neutral-background: none !important;
                  --darkreader-neutral-text: none !important;
                  --darkreader-selection-background: none !important;
                  --darkreader-selection-text: none !important;
                }
              \`;
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
