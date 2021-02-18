import { Zoom } from '@material-ui/core'
import React from 'react'
import '../styles/form.css';

export default function results(props) {
    return (
        <Zoom in={props.showValue} >
            <div>
                <h1>{props.resultados.semPlano}</h1>
                <h1>{props.resultados.comPlano}</h1>
            </div>
        </Zoom>
    )
}
