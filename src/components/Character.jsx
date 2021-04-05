import { card, makeStyles, Tooltip, Typography } from '@material-ui/core';
//import logo from '../images/logo.png';



const useStyle = makeStyles({
    img: {
        height:300,
        width: '100%',
        objectFit: 'cover'
    }
})


const Character = ({ item }) => {
    const classes = useStyle();
    return (
    <card>
        <Tooltip title = {
                <>
                    <Typography> Name:  {item.name} </Typography>
                    <Typography> Real Name: {item.portrayed} </Typography>
                    <Typography> NickName: {item.nickname} </Typography>
                    <Typography> Status: {item.status} </Typography>
                </>
        } arrow>
        <img src = {item.img} className = {classes.img} alt = "character"/>
        </Tooltip>
        
    </card>
    )
}

export default Character;