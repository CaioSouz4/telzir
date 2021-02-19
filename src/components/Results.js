import { Zoom } from '@material-ui/core'
import React from 'react'
import '../styles/form.css';

export default function results(props) {
    return (
        <Zoom in={props.showValue} >
            <div>
                <h1 data-testid="semPlano">{`R$ ${props.resultados.semPlano}`}</h1>
                <h1 data-testid="comPlano">{`R$  ${props.resultados.comPlano}`}</h1>
            </div>
        </Zoom>
    )
}
