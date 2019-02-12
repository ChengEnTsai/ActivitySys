// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';

// class ConfirmDialog extends React.Component{

//     render(){
//         return (
//             <div>
//                 <Dialog                     
//                     open={this.props.isConfirmOpen}>
//                     <DialogTitle>Confirm</DialogTitle>
//                     <DialogContent>
//                         是否確定?
//                         <div style={{float : 'right'}} >
//                             <Button onClick={this.props.toggleDialogOpen} color="primary">
//                                 取消
//                             </Button>
//                             <Button type="submit" color="primary">
//                                 儲存
//                             </Button>
//                         </div>   
//                     </DialogContent>                    
//                 </Dialog>
//             </div>
//         );
//     }
// }

// ConfirmDialog.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ConfirmDialog);