import Character from './Character';
import {Grid,Box} from '@material-ui/core';

const Characters = ({ data }) => {
    return (
        <Box style = { {margin:10} }>
            <Grid container spacing = {2}>
                {
                    data.map(item => (
                        <Grid item xs ={3}>
                            <Character key = {item.char_id} item ={item} />
                        </Grid>
        
                ))

                }
            </Grid>
            </Box>
    )
}

export default Characters;