import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const withLoading = async (promise) => {
    setLoading(true);
    try {
      const result = await promise;
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return [loading, withLoading];
};

export default useLoading;
