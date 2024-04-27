"use client"

import Alert from 'react-bootstrap/Alert';

interface GenericAlertProps {
    variant: string;
    text: string;
    show: boolean;
}
/**
 * 
 * @param props {variant, text}
 * @returns 
 */
export const GenericAlert = (props: GenericAlertProps) => {
    const { variant, text, show } = props;
    return (
        <Alert key={variant} variant={variant} show={show}>
            {text}
        </Alert>
    );
}
