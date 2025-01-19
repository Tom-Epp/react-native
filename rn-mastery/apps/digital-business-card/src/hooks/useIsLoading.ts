import React from 'react';

export function useIsLoading() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, setIsLoading };
}
