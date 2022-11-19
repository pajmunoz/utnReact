import Alert from 'react-bootstrap/Alert';
function AlertComp({variant,text}){
    return(
        <Alert key={variant} variant={variant}>
            {text}
        </Alert>
    )
}

export default AlertComp