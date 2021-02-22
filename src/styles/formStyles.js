import { makeStyles } from "@material-ui/core";
import Image from '../assets/índice.jpg'; // Import using relative path

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
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
        padding: '0 4em 0 4em',
        //flexDirection: 'column',
        justifyContent: 'start',
        clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)',
        //borderTopRightRadius: "97.5%",

        [theme.breakpoints.down('sm')]: {
            padding: '3em',
            width: 'auto',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            borderTopRightRadius: "0",
        },
    },

    containerResults: {
        color: 'white',
        marginTop: '3em',
        alignSelf: 'center',

    },

    form: {
        color: 'white',
        fontFamily: 'PT Serif , serif',
        paddingTop: '4em',
        width: '40%',
    }
}));

export default useStyles
