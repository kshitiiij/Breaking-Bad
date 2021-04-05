import {AppBar, Toolbar, makeStyles, Box, InputBase} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import logo from '../images/logo.png';


const useStyle = makeStyles(
    {   
        header : {
            background : '#000',
            padding : 5
        },
        image : {
            width:100
        },
        search : {
            background : 'rgba(255,255,255,0.15)',
            marginLeft : 200,
            borderRadius : 5,
            position : 'relative'
        },
        inputBox : {
            color : 'inherit',
            margin : '0 50px'
        },
        searchicon : {
            position : 'absolute',
            marginLeft : 9,
            top : 5
        }

    }
)

const Header = ({getText }) => {
    const classes = useStyle();
    return(
        <AppBar className={classes.header}position="static">
            <Toolbar>
                <img className={classes.image} src={logo} alt="logo" />
                <Box className={classes.search}>
                    <Box className = {classes.searchicon}>
                        <Search />
                    </Box>
                    <InputBase 
                        placeholder = "Search by Name"
                        autoFocus
                        classes = {{root : classes.inputBox}}
                        onChange = {(e) => getText(e.target.value)}
                    />
                </Box>
            </Toolbar>

        </AppBar>
    )
}



export default Header;