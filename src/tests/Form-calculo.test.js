import React from 'react';
import { fireEvent, prettyDOM, render, screen, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";
import Form from '../pages/Form';
import stack from './stacktestes.json'

describe('teste de calculo dos planos de DDD', () => { 
    test('testa calculo dos planos', async () => {

        const { getByTestId } = render(<Form/>);
       
        const dddOrigem = await waitFor(() => getByTestId('dddOrigem'));
       // const dddDestino = await waitFor(() => getByTestId('dddDestino'));
     
        fireEvent.change(dddOrigem, { target: { value: '11' } })
        console.log(prettyDOM(dddOrigem))
        expect(dddOrigem.value).toEqual('11')

        /* fireEvent.change(dddDestino, {
            target: { value: '17' }
        });  */
        
        console.log(prettyDOM(dddOrigem))
        //console.log(prettyDOM(dddDestino))

        console.log(dddOrigem.value)

       // expect(dddOrigem.value).toEqual('11')

        /* fireEvent.change(dddOrigem, {
            target: { value: '11' }
        });   
        fireEvent.change(dddDestino, {
            target: { value: '17' }
        }); 
        fireEvent.change(tempo, {
            target: { value: '80' }
        });  
        fireEvent.change(plano, {
            target: { value: 'FaleMais60' }
        });
 */
        /* expect(dddOrigem.value).toEqual('11')
        expect(dddDestino.value).toEqual('17')
        expect(plano.value).toEqual('80')
        expect(tempo.value).toEqual('FaleMais30')   */

        //expect(screen.getByTestId('semPlano')).toHaveTextContent('136.00');
        //expect(screen.getByTestId('comPlano')).toHaveTextContent('37.40');

        /* stack.forEach(test => {

            let dddOrigemValue = test.dddOrigemValue,
            dddDestinoValue = test.dddDestinoValue ,
            planoValue = test.planoValue,
            tempoValue = test.tempoValue,
            resultadoSemPlano = test.resultadoSemPlano,
            resultadoComPlano = test.resultadoComPlano 

            fireEvent.change(dddOrigem, {
                target: { value: dddOrigemValue }
            });   
            fireEvent.change(dddDestino, {
                target: { value: dddDestinoValue }
            });   
            fireEvent.change(plano, {
                target: { value: planoValue }
            });
            fireEvent.change(tempo, {
                target: { value: tempoValue }
            });  

            expect(dddOrigem.value).toEqual(dddOrigemValue)
            expect(dddDestino.value).toEqual(dddDestinoValue)
            expect(plano.value).toEqual(planoValue)
            expect(tempo.value).toEqual(tempoValue) 
            
            expect(screen.getByTestId('semPlano')).toHaveTextContent(resultadoSemPlano);
            expect(screen.getByTestId('comPlano')).toHaveTextContent(resultadoComPlano);
        }); */



       /*  let dddOrigemValue = '11',
            dddDestinoValue = '17' ,
            planoValue = 'FaleMais30',
            tempoValue = "80",
            resultadoSemPlano = '136.00',
            resultadoComPlano = '93.50'; 
            
        const { getByTestId } = render(<Form/>);
       
        const dddOrigem = await waitFor(
            () => getByTestId('dddOrigem')
        )
        const dddDestino = await waitFor(
            () => getByTestId('dddDestino')
        )
        const tempo = await waitFor(
            () => getByTestId('tempo')
        )
        const plano = await waitFor(
            () => getByTestId('plano')
        ) 
       
        fireEvent.change(dddOrigem, {
            target: { value: dddOrigemValue }
        });   
        fireEvent.change(dddDestino, {
            target: { value: dddDestinoValue }
        });   
        fireEvent.change(plano, {
            target: { value: planoValue }
        });
        fireEvent.change(tempo, {
            target: { value: tempoValue }
        });  

        expect(dddOrigem.value).toEqual(dddOrigemValue)
        expect(dddDestino.value).toEqual(dddDestinoValue)
        expect(plano.value).toEqual(planoValue)
        expect(tempo.value).toEqual(tempoValue) 
        
        expect(screen.getByTestId('semPlano')).toHaveTextContent(resultadoSemPlano);
        expect(screen.getByTestId('comPlano')).toHaveTextContent(resultadoComPlano); */
       
    })
})

