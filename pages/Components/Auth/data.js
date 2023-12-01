import { useEffect } from 'react';

const Data = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../api/example'); // Relative path
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        alert('Data fetched successfully:', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return <div>Hello Next.js</div>;
};

export default Data;
