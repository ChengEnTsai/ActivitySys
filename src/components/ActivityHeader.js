import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import ContentAdd from 'material-ui/svg-icons/content/add';

// const ActivityHeader = () => (
//     <div>
//         <h1>Todo list</h1>
//         <FloatingActionButton style={style} secondary={true} onClick={this.props.handleClickOpen}>
//             <ContentAdd />
//         </FloatingActionButton>
//     </div>
// );

class ActivityHeader extends React.Component {
    render () {
        return (
            <div>
                <h1>Activity Demo
                    <Fab style={{float : 'right'}} color="primary" aria-label="Add" 
                         onClick={this.props.toggleDialogOpen}>
                        <AddIcon />
                    </Fab>
                </h1>                
            </div>
        );
    }
}

export default ActivityHeader;