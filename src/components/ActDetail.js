import React from 'react';
import ActForm from './ActForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = {
    // flex: {
    //   flex: 1,
    // }
};

class ActDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dialogTitle: ''
        }
    }

    componentWillReceiveProps(nextProps){ //每次開啟活動內容頁面後，先判斷的事情

        //判斷操作模式顯示header
        this.setState({
            dialogTitle: typeof nextProps.actItem.index !== 'undefined' ? '編輯活動' : '新增活動'
        })
    }

    render(){
        const { classes } = this.props;
        // console.log(typeof this.props.actItem.index);
        return(
            <div>
                <Dialog                     
                    open={this.props.isDialogOpen}>                    
                    <DialogTitle>{this.state.dialogTitle}</DialogTitle>
                    <DialogContent>
                        <ActForm 
                            actItem={this.props.actItem}                            

                            addItem={this.props.addItem} 
                            editItem={this.props.editItem}
                            toggleDialogOpen={this.props.toggleDialogOpen}/>
                    </DialogContent>                    
                </Dialog>
            </div>
        );
    }
}

ActDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActDetail);