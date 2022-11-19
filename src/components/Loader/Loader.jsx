import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
  return (
    <div className="text-center mt-5">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      </div>
  )
}
