// app/hooks/useActiveSection.ts
'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], initialSection: string) {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        // This rootMargin creates a trigger "line" at the vertical center of the viewport.
        const observer = new IntersectionObserver(observerCallback, {
          rootMargin: '-50% 0px -50% 0px'
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}