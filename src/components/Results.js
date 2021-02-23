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
                <h1 data-testid="semPlano">< span className="spanResult">{`R$ ${props.resultados.semPlano}`}</span></h1>
                <h1>
                    Com o plano {props.plano}:
                </h1>
                <h1 data-testid="comPlano"><span className="spanResult">{`R$ ${props.resultados.comPlano}`}</span></h1>
            </div>
        </Zoom>
    )
}
