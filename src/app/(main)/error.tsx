'use client'; // Error components must be Client Components
import * as Sentry from '@sentry/nextjs';

import {useEffect} from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({error, reset}: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-2xl">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
