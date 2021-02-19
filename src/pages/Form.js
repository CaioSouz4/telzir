import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { calculaComPlano, calcularSemPlano } from '../services/calculo';
import useStyles from '../styles/formStyles'
import Results from '../components/Results';

export default function Form() {

    const classes = useStyles(); 

    const [plano, setPlano] = useState('');
    const [tempoLigacao, setTempoLigacao] = useState('');
    const [ddds, setDdds] = useState({origem: '', destino: ''});
    const [showValue, setShowValue] = useState(false);
    const [resultados, setResultados] = useState({semPlano: 0, comPlano: 0});
    const [options] = useState(["011",'016',"017","018"])

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
                semPlano: calcularSemPlano(ddds.origem, ddds.destino, tempoLigacao).toFixed(2),
                comPlano: calculaComPlano(ddds.origem, ddds.destino, tempoLigacao, plano).toFixed(2) 
            })
            setShowValue(true)
        } else {
            setShowValue(false)
        }
    },[ddds, tempoLigacao, plano]);

    return (
        <div className={classes.container}>
            <div>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel classes={{root: classes.formLabelRoot, focused: classes.formLabelFocused}}>DDD de origem</InputLabel>
                    <Select
                        //native
                        className={classes.filled}
                        name='origem'
                        inputProps={{"data-testid": "dddOrigem"}}
                        value={ddds.origem}
                        onChange={handleChange}>
                        <option value=''/>
                        {options.map((item, index) => {
                            if(parseInt(item) === ddds.destino) {
                                return ''
                            } else {
                                return <option key={index} value={parseInt(item)}>{`${item}`}</option>
                            }
                        })}  
                    </Select>
                </FormControl>
            
                <FormControl variant="filled" onChange={handleChange} className={classes.formControl}>
                    <InputLabel classes={{root: classes.formLabelRoot, focused: classes.formLabelFocused}}>DDD de destino</InputLabel>
                    <Select
                        //native
                        className={classes.filled}
                        name='destino'
                        inputProps={{"data-testid": "dddDestino"}}
                        value={ddds.destino}
                        onChange={handleChange}>
                        <option value=''/>
                        {options.map((item, index) => {
                            if(parseInt(item) === ddds.origem) {
                                return ''
                            } else {
                                return <option key={index} value={parseInt(item)}>{`${item}`}</option>
                            }
                        })} 
                    </Select>
                </FormControl>
                
                <FormControl variant="filled" onChange={handleChange} className={classes.formControl}>
                    <InputLabel classes={{root: classes.formLabelRoot, focused: classes.formLabelFocused}}>Plano </InputLabel>
                    <Select 
                        value={plano}
                        className={classes.filled}
                        inputProps={{"data-testid": "plano"}}
                        onChange={handleChangePlano}>
                        <MenuItem value={'FaleMais30'}>FaleMais 30</MenuItem>
                        <MenuItem value={'FaleMais60'}>FaleMais 60</MenuItem>
                        <MenuItem value={'FaleMais120'}>FaleMais 120</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" onChange={handleChange} className={classes.formControl}>
                    <TextField 
                        InputLabelProps={{
                            classes: {
                                root: classes.formLabelRoot,
                                focused: classes.formLabelFocused,
                            },
                        }} 
                        InputProps={{
                            classes: {
                                root: classes.filled
                                },
                            
                        }}
                        inputProps={{ "data-testid": "tempo"}}
                        type="number" 
                        label="Tempo de ligação" 
                        value={tempoLigacao}
                        onChange={handleChangeTempo}
                        className={classes.filled}
                        variant="filled" />  
                </FormControl>
                <Results 
                    showValue={showValue}
                    resultados={resultados}
                />
            </div>
        </div>
    )
}
