import { useLayoutEffect, useState } from 'react';

export function useMobileView(): boolean {
  const [mobileView, setMobileView] = useState(window.innerWidth <= 640);

  useLayoutEffect(() => {
    const updateMobileView = () => {
      setMobileView(window.innerWidth <= 640);
    };

    window.addEventListener('resize', updateMobileView);
    return () => window.removeEventListener('resize', updateMobileView);
  }, []);

  return mobileView;
}
