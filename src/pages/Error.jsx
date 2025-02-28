import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page';
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{message}</p>
    </>
  );
}
