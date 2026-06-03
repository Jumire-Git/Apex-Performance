import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for lazy loading images using Intersection Observer API
 * Improves performance by deferring image loading until they're needed
 * 
 * @param {object} options - Intersection Observer options
 * @returns {[ref, isLoaded]} - ref to attach to image, and isLoaded state
 */
export function useLazyLoad(options = {}) {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Check if it's already loaded
        if (img.dataset.src && !img.src) {
          img.src = img.dataset.src;
        }
        
        img.addEventListener('load', () => {
          img.classList.add('loaded');
          setIsLoaded(true);
        });
        
        // Stop observing this element
        observer.unobserve(img);
      }
    }, {
      rootMargin: '50px', // Start loading 50px before entering viewport
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isLoaded];
}

export default useLazyLoad;
