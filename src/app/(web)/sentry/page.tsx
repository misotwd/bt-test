'use client';

import {useState} from 'react';

function SentryPage() {
  const [isError, setIsError] = useState(false);

  if (isError) throw new Error('Sentry Frontend Error');

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={() => setIsError(true)}
    >
      Throw error
    </button>
  );
}

export default SentryPage;
