import { Zoom } from '@material-ui/core'
import React from 'react'
import '../styles/form.css';

export default function Results(props) {
    return (
        <Zoom in={props.showValue} >
            <div>
                <h1>
                    Sem o plano:
                </h1>
                <h1 data-testid="semPlano">{`R$ ${props.resultados.semPlano}`}</h1>
                <h1>
                    Com o plano {props.plano}:
                </h1>
                <h1 data-testid="comPlano">{`R$  ${props.resultados.comPlano}`}</h1>
            </div>
        </Zoom>
    )
}
