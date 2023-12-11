import { useState, useEffect } from 'react';

function NumberManagement() {
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const url = new URL('https://example.com/path?param1=value1&param2=value2');
    const params = Object.fromEntries(url.searchParams.entries());
    setQueryParams(params);
  }, []);
console.log( queryParams )
  return (
    <div>
      <h1>Query Parameters:</h1>
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>
    </div>
  );
}

export default NumberManagement;