import { makeStyles } from "@material-ui/core";
import Image from '../assets/background1.jpg'; // Import using relative path

const useStyles = makeStyles(theme => ({

    main: {
        display: 'flex',
        height: '100%',
        justifyContent: 'between',
        backgroundImage: `url(${Image})`,
       //backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'
    },

    option: {
        color: 'black'
    },

    filled: {
        '&::after': {
            borderBottom: '2px solid #fff'
        },
        color: '#fff'
    },

    formControl: {
        width: '15em',
        margin: '1em',
        background: 'linear-gradient(45deg, #214f7c 30%, #337ab7 90%)',
        borderRadius: 15,

              
    },

    formLabelRoot: { 
        color: '#fff',
        '&$formLabelFocused': { color: '#fff' },
    },

    formLabelFocused: {

    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        width: '35%',
        backgroundColor:' #f45557',
        padding: '0 4em 0 4em',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopRightRadius: "97.5%",

        [theme.breakpoints.down('sm')]: {
            padding: '3em',
            width: 'auto',
            borderTopRightRadius: "0",
        },
    },

    containerResults: {
        
    },

    form: {
        paddingTop: '4em'
    }
}));

export default useStyles
