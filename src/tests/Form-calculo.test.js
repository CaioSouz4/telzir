import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";
import Form from '../pages/Form';

describe('teste de calculo dos planos de DDD', () => { 
    test('testa calculo dos planos', async () => {

        const { getByTestId } = render(<Form/>);

        const dddOrigemValue = '11',
        dddDestinoValue = '17',
        planoValue = 'FaleMais60',
        tempoValue = '80',
        resultadoSemPlano = '136.00',
        resultadoComPlano = '37.40'

        const dddOrigem = await waitFor(() => getByTestId('dddOrigem'));
        const dddDestino = await waitFor(() => getByTestId('dddDestino'));
        const plano = await waitFor(() => getByTestId('plano'));
        const tempo = await waitFor(() => getByTestId('tempo'));
        
        fireEvent.change(dddOrigem, {
            target: { value: dddOrigemValue }
        });   
        fireEvent.change(dddDestino, {
            target: { value: dddDestinoValue }
        }); 
        fireEvent.change(tempo, {
            target: { value: tempoValue }
        });  
        fireEvent.change(plano, {
            target: { value: planoValue }
        });
 
        expect(dddOrigem.value).toEqual(dddOrigemValue)
        expect(dddDestino.value).toEqual(dddDestinoValue)
        expect(tempo.value).toEqual(tempoValue)
        expect(plano.value).toEqual(planoValue)   
        expect(screen.getByTestId('semPlano')).toHaveTextContent(resultadoSemPlano);
        expect(screen.getByTestId('comPlano')).toHaveTextContent(resultadoComPlano);
    })
})

