'use client';

import { useEffect } from 'react';

// This component handles Dark Reader extension compatibility
// It should be used at the root layout of your application
export function DarkReaderHandler() {
  useEffect(() => {
    // Disable Dark Reader extension on this site completely
    const disableDarkReader = () => {
      // Insert a meta tag to disable Dark Reader
      const meta = document.createElement('meta');
      meta.name = 'darkreader-lock';
      meta.content = 'true';
      document.head.appendChild(meta);
      
      // Insert a style element with CSS that disables Dark Reader effects
      const style = document.createElement('style');
      style.textContent = `
        /* Force disable Dark Reader effects */
        html {
          --darkreader-neutral-background: none !important;
          --darkreader-neutral-text: none !important;
          --darkreader-selection-background: none !important;
          --darkreader-selection-text: none !important;
        }
      `;
      document.head.appendChild(style);
    };
    
    // Remove Dark Reader attributes that may cause hydration errors
    const removeDarkReaderAttrs = () => {
      try {
        // Remove all Dark Reader specific attributes
        const darkReaderAttrs = [
          'data-darkreader-inline-stroke',
          'data-darkreader-inline-fill',
          'data-darkreader-inline-color',
          'data-darkreader-inline-bgcolor',
          'data-darkreader-inline-border',
          'data-darkreader-inline-boxshadow',
          'data-darkreader-inline-filter'
        ];
        
        darkReaderAttrs.forEach(attr => {
          document.querySelectorAll(`[${attr}]`).forEach(el => {
            el.removeAttribute(attr);
          });
        });
        
        // Remove inline styles with darkreader variables
        document.querySelectorAll('*[style*="darkreader"]').forEach(el => {
          const style = el.getAttribute('style');
          if (style) {
            const cleanStyle = style.split(';')
              .filter(s => !s.includes('darkreader'))
              .join(';');
            el.setAttribute('style', cleanStyle);
          }
        });
      } catch (e) {
        console.error('Error removing Dark Reader attributes:', e);
      }
    };

    // First disable Dark Reader completely
    disableDarkReader();
    
    // Then remove any existing Dark Reader attributes
    removeDarkReaderAttrs();
    
    // Set up a mutation observer to handle any new elements or changes
    const observer = new MutationObserver(() => {
      removeDarkReaderAttrs();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true 
    });

    // Also handle after each route change for Next.js
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', removeDarkReaderAttrs);
    }

    return () => {
      observer.disconnect();
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', removeDarkReaderAttrs);
      }
    };
  }, []);

  return null;
}
