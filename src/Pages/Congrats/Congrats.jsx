import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";



export default function Congrats() {
    const [completed, setCompleted] = useState(0);
    const [end, setEnd] = useState(false);

    useEffect(() => {

        if (completed <= 100) {
            setInterval(() => setCompleted(Math.round(Math.atan(completed) * 100) + 90), 2000);
        } else {
            clearInterval();
            setEnd(true)
        }

    }, [completed]);
    return (
        <>
            {!end &&
                <>
                <p>Estamos procesando su solicitud</p>
                <ProgressBar now={completed} label={`${completed}%`} />
                </>
            }
            {end &&
                <div className="text-center pt-5">
                    <h1 className="text-success">ÉXITO</h1>
                    <h4>Su compra ha sido procesada</h4>
                    <hr className="my-5" />
                    <p className='text-muted pt-5'>Click en 'Regresar' para Volver al inicio</p>
                    <Button variant="primary" type="button">
                        <Link className="link-light text-decoration-none " to={`/`}>Regresar</Link>
                    </Button>
                </div>
            }





        </>
    )
}
