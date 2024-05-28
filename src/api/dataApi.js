export const fetchDataApi = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await response.json();
    return data;
  };