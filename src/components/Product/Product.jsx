import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

export default function Character({ thumbnail, title, price, id, currency }) {

  const [loading, isLoading] = useState(true);


  useEffect(() => {

    const result = async () => {

      try {
        isLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, []);
  const showLoader = () => {
    return (
      <div className="border-2">
        <p>Loading...</p>
      </div>
    );
  };

  // eslint-disable-next-line no-lone-blocks
  {
    if (!loading) {
      return (
        <div className="col-md-12 col-lg-6 my-2">

          <div className="row g-0">
            <div className="col-md-4">


              <Image src={thumbnail} rounded='true' fluid='true' className="w-100" thumbnail='true' alt="..." onLoad={() => showLoader()} />

            </div>
            <div className="col-md-8">
              <Card>
                <Card.Body>
                  <h5 className="text-truncate my-2">{title}</h5>
                  <h6 className="mb-2 text-muted">
                    Precio: {price} {currency}
                  </h6>
                  <Button variant="primary" className="mt-5" type="button">
                    <Link className="link-light text-decoration-none " to={`/producto/${id}`}>Ver Detalle</Link>
                  </Button>
                </Card.Body >
              </Card>
            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div className="col-6 my-2">
          <div className="skeleton-card w-100"></div>
        </div>
      );
    }
  }
}
