import { makeStyles } from "@material-ui/core";
import Image from '../assets/índice.jpg'; // Import using relative path

const useStyles = makeStyles(theme => ({

    main: {
        display: 'flex',
        height: '100%',
        justifyContent: 'between',
        backgroundImage: `url(${Image})`,
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
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        textAlign: 'start'
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
        width: '60%',
        backgroundColor: '#2c3e50',
        padding: '0 0 0 4em',
        justifyContent: 'start',
        clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)',
        
        [theme.breakpoints.down('sm')]: {
            padding: '3em',
            width: '100%',
            height: 'fit-content',
            clipPath: 'none',
            borderTopRightRadius: "0",
        },
        [theme.breakpoints.only('md')]: {
            padding: '3em',
            width: '100%',
            height: '100%',
            clipPath: 'none',
            borderTopRightRadius: "0",
        },
    },

    containerResults: {
        color: 'white',
        marginTop: '3em',
        alignSelf: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            width: 'auto',
            textAlign: 'center',
        },
    },

    form: {
        color: 'white',
        fontFamily: 'PT Serif , serif',
        width: '40%',
        alignSelf: 'center',
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            padding: 0,           
        },

        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            paddingTop: '4em',           
        },
    }

    
}));

export default useStyles;