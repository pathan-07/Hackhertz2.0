'use client';

import { useEffect } from 'react';

// This component handles Dark Reader extension compatibility
// It should be used at the root layout of your application
export function DarkReaderHandler() {
  useEffect(() => {
    // Remove Dark Reader attributes from SVG elements after page load
    // This helps avoid hydration mismatches caused by the Dark Reader extension
    const removeDarkReaderAttrs = () => {
      try {
        document.querySelectorAll('[data-darkreader-inline-stroke]').forEach(el => {
          el.removeAttribute('data-darkreader-inline-stroke');
        });
        
        document.querySelectorAll('[data-darkreader-inline-fill]').forEach(el => {
          el.removeAttribute('data-darkreader-inline-fill');
        });
        
        document.querySelectorAll('[data-darkreader-inline-color]').forEach(el => {
          el.removeAttribute('data-darkreader-inline-color');
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

    // Run once after initial render
    removeDarkReaderAttrs();
    
    // Also set up a mutation observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      removeDarkReaderAttrs();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ['style', 'data-darkreader-inline-stroke', 'data-darkreader-inline-fill', 'data-darkreader-inline-color'] 
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
