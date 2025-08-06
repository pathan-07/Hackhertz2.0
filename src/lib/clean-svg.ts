'use client';

// This utility cleans SVG elements from Dark Reader attributes
// Use it in components that use SVG icons where hydration mismatches occur

export function cleanDarkReaderFromSvg(element: SVGSVGElement | null) {
  if (!element) return;
  
  // Remove Dark Reader specific attributes
  element.removeAttribute('data-darkreader-inline-stroke');
  element.removeAttribute('data-darkreader-inline-fill');
  element.removeAttribute('data-darkreader-inline-color');
  
  // Remove inline styles with darkreader variables
  const style = element.getAttribute('style');
  if (style && style.includes('darkreader')) {
    const cleanStyle = style
      .split(';')
      .filter(s => !s.includes('darkreader'))
      .join(';');
    
    if (cleanStyle.trim()) {
      element.setAttribute('style', cleanStyle);
    } else {
      element.removeAttribute('style');
    }
  }
  
  // Process all children SVG elements recursively
  Array.from(element.querySelectorAll('*')).forEach(child => {
    if (child instanceof SVGElement) {
      child.removeAttribute('data-darkreader-inline-stroke');
      child.removeAttribute('data-darkreader-inline-fill');
      child.removeAttribute('data-darkreader-inline-color');
      
      const childStyle = child.getAttribute('style');
      if (childStyle && childStyle.includes('darkreader')) {
        const cleanChildStyle = childStyle
          .split(';')
          .filter(s => !s.includes('darkreader'))
          .join(';');
        
        if (cleanChildStyle.trim()) {
          child.setAttribute('style', cleanChildStyle);
        } else {
          child.removeAttribute('style');
        }
      }
    }
  });
}

// React hook for SVG ref to clean Dark Reader attributes
export function useSvgDarkReaderCleaner() {
  return (element: SVGSVGElement | null) => {
    cleanDarkReaderFromSvg(element);
  };
}
