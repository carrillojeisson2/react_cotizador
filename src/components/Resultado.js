import React from 'react';
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const ResultadoCotizacion = styled.div`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center
`;

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const Textocotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({ cotizacion }) => {

    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> :
            (
                <ResultadoCotizacion>
                    <TransitionGroup
                        component="p"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <Textocotizacion>El total es: $ {cotizacion}</Textocotizacion>

                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            )
    )
}

export default Resultado;