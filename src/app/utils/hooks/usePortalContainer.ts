import { useEffect, useState } from 'react';

export const usePortalContainer = (selector: string): HTMLDivElement | null => {
  const [portalContainerElement, setPortalContainerElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalContainer = document.body.querySelector<HTMLDivElement>(`.${selector}`);

    if (portalContainer) {
      setPortalContainerElement(portalContainer);

      return;
    }

    const newPortalContainer = document.createElement('div');

    newPortalContainer.className = selector;

    document.body.append(newPortalContainer);

    setPortalContainerElement(newPortalContainer);
  }, []);

  return portalContainerElement;
};
