import { MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'

/* Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
problema. */

export default function Form() {
    return (
        <div>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                //value={age}
                //onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                //value={age}
                //onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>

           <TextField 
                id="filled-basic"
                type="number" 
                label="Tempo de ligação" 
                variant="filled" />  
        </div>
    )
}
