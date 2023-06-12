'use client';

function SentryPage() {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={() => {
        throw new Error('Sentry Frontend Error');
      }}
    >
      Throw error
    </button>
  );
}

export default SentryPage;
