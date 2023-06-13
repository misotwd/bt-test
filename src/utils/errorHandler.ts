import * as Sentry from '@sentry/nextjs';

const handleError = (error: any) => {
  Sentry.captureException(error);
};

export default handleError;
