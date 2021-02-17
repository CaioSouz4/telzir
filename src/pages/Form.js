import { FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Zoom } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { calculaComPlano, calcularSemPlano } from '../services/calculo';
import './form.css';

/* Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
problema. */

const useStyles = makeStyles(({
    root: {
      margin: "20px",
      display: 'flex',
      backgroundColor: "#424242",
      minWidth: "20rem",
      width: "20rem",
      height: "10rem"
    },
    input: {
        width: '15em',
        margin: '1em'
      /* flexWrap: 'wrap',
      flex: '1 0 auto',
      maxWidth: '60%',
      color: "#dcdde1",
      overflow: "auto" */
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        width: '35%',
        backgroundColor:' #bdc3c7',
        padding: '4em',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopRightRadius: "97.5%",
    }
}));


export default function Form() {

    const classes = useStyles(); 

    const [plano, setPlano] = useState('');
    const [tempoLigacao, setTempoLigacao] = useState('');
    const [ddds, setDdds] = useState({origem: '', destino: ''});
    const [showValue, setShowValue] = useState(false);
    const [resultados, setResultados] = useState({semPlano: 0, comPlano: 0});
    const [options, setOptions] = useState(["011",'016',"017","018"])

    const handleChange = (event) => {
        setDdds({...ddds, [event.target.name]: event.target.value});
    }

    const handleChangeTempo = (event) => {
        setResultados({semPlano: 0, comPlano: 0})
        setTempoLigacao(event.target.value)
    }

    const handleChangePlano = (event) => {
        setPlano(event.target.value)
    }

    useEffect(() => {
        if(ddds.origem !== '' && ddds.destino !== '' && tempoLigacao !== '' && tempoLigacao !== 0 && plano !== '') {
            setResultados({
                semPlano: calcularSemPlano(ddds.origem, ddds.destino, tempoLigacao),
                comPlano: calculaComPlano(ddds.origem, ddds.destino, tempoLigacao, plano)
            })
            setShowValue(true)
        } else {
            setShowValue(false)
        }
    },[ddds, tempoLigacao, plano]);

    return (
        <div className={classes.container}>
            <div>

            
                <FormControl variant="filled" className={classes.input}>
                    <InputLabel>DDD de origem</InputLabel>
                    <Select 
                        name='origem' 
                        value={ddds.origem} 
                        onChange={handleChange}>
                        {options.map((item, index) => {
                            if(parseInt(item) === ddds.destino) {
                                return 
                            } else {
                                return <MenuItem key={index} value={parseInt(item)}>{`${item}`}</MenuItem>
                            }
                        })}  
                    </Select>
                </FormControl>
            
                <FormControl variant="filled" onChange={handleChange} className={classes.input}>
                    <InputLabel>DDD de destino</InputLabel>
                    <Select 
                        name='destino'
                        value={ddds.destino}
                        onChange={handleChange}>
                        {options.map((item, index) => {
                            if(parseInt(item) === ddds.origem) {
                                return 
                            } else {
                                return <MenuItem key={index} value={parseInt(item)}>{`${item}`}</MenuItem>
                            }
                        })}  
                    {/*  <MenuItem value={11}>011</MenuItem>
                        <MenuItem value={16}>016</MenuItem>
                        <MenuItem value={17}>017</MenuItem>
                        <MenuItem value={18}>018</MenuItem>  */}
                    </Select>
                </FormControl>
                
                <FormControl variant="filled" onChange={handleChange} className={classes.input}>
                    <InputLabel>Plano </InputLabel>
                    <Select 
                        value={plano}
                        onChange={handleChangePlano}>
                            
                        <MenuItem value={'FaleMais30'}>FaleMais 30</MenuItem>
                        <MenuItem value={'FaleMais60'}>FaleMais 60</MenuItem>
                        <MenuItem value={'FaleMais120'}>FaleMais 120</MenuItem>
                    
                    </Select>
                </FormControl>

            <TextField 
                    id="filled-basic"
                    type="number" 
                    label="Tempo de ligação" 
                    value={tempoLigacao}
                    onChange={handleChangeTempo}
                    className={classes.input}
                    variant="filled" />  
                    {showValue === true ? 'true' : 'false'}
               {/*  {showValue ?  */}
                <> 
                    <Zoom in={showValue} >
                        <div>
                            <h1>
                                {resultados.semPlano.toFixed(2)} 
                            </h1>
                            <h1>
                                {resultados.comPlano.toFixed(2)} 
                            </h1>
                        </div>
                    </Zoom>
                </>
              {/*   :
                    ''
                } */}
            </div>
        </div>
    )
}
