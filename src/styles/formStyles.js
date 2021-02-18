import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    filled: {
        '&::after': {
            borderBottom: '2px solid #e67e22'
        }
    },

    formControl: {
        width: '15em',
        margin: '1em',       
    },

    formLabelRoot: { 
        '&$formLabelFocused': { color: '#e67e22' },
    },

    formLabelFocused: {

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

        [theme.breakpoints.down('sm')]: {
            padding: '3em',
            width: 'auto',
            borderTopRightRadius: "0",
        },
    }
}));

export default useStyles
