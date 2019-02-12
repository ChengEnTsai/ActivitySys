import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 420,
    },
    dateField:{
        width: 200,
        margin: 10
    },
    // root: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     flexWrap: 'wrap',
    //     padding: theme.spacing.unit / 2,
    // },
    button: {
        margin: theme.spacing.unit,
    },
    chip: {
        // margin: theme.spacing.unit / 2,
        margin: '3px',
        height: '20px',
        backgroundColor: 'rgb(138, 243, 207)'
    }
  });

class ActForm extends React.Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            index: undefined,
            title: '',
            StartTime: '',
            EndTime: '',
            content: '',
            CreatorID: '蔡小恩',
            tags: []
        };
    }
    
    componentWillReceiveProps(nextProps){  //編輯模式先init actItem state
        if(typeof nextProps.actItem.index !== 'undefined'){
            this.setState({
                index: nextProps.actItem.index,
                title: nextProps.actItem.title,
                StartTime: nextProps.actItem.StartTime,
                EndTime: nextProps.actItem.EndTime,
                content: nextProps.actItem.content,
                CreatorID: nextProps.actItem.CreatorID,
                tags: nextProps.actItem.tags
            });
        }        
    }

    onSubmit(event){
        event.preventDefault(); //why?
        // console.log(this.state);
        if(this.state.title === ''){
            console.log('請輸入活動名稱');            
        }else if(typeof this.props.actItem.index === 'undefined'){
            this.props.addItem(this.state);
            this.props.toggleDialogOpen({index : undefined});
        }else if(typeof this.props.actItem.index !== 'undefined'){
            // console.log(this.state);
            this.props.editItem(this.state);
            this.props.toggleDialogOpen({index : undefined});
        }
    }
    
    render(){
        const { classes } = this.props;  
        
        //tag chips
        var tagchips =  <div style={{    border: '1px #eee solid'}}>
                            {this.state.tags.map((tag,index)=>{
                                return(<Chip className={classes.chip}
                                    key={index}
                                    label={tag}
                                    // color="primary"
                                />);
                            })}
                        </div>                

        // const currentTime = Date.now().format("yyyy-MM-ddThh:mm");     
        return(
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <div>
                    <TextField
                        id="standard-textarea"  
                        autoFocus                      
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                        label="活動名稱"
                        placeholder="請輸入活動名稱"
                        className={classes.textField}                        
                        margin="normal"
                        variant="outlined"
                        />                    
                </div>
                <div>
                    <TextField
                        id="datetime-local-start"
                        label="起始時間"
                        type="datetime-local"                        
                        value={this.state.StartTime}
                        onChange={e => this.setState({ StartTime: e.target.value })}
                        className={classes.dateField}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="datetime-local-end"
                        label="結束時間"
                        type="datetime-local"                        
                        value={this.state.EndTime}
                        onChange={e => this.setState({ EndTime: e.target.value })}
                        className={classes.dateField}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>                
                
                {tagchips}

                <Divider variant="inset" style={{marginLeft: 0, marginRight: 0, marginTop: 10}}/>

                <div>
                    <TextField
                        id="standard-textarea"
                        label="活動內容敘述"
                        placeholder="請輸入活動內容"
                        value={this.state.content}
                        onChange={e => this.setState({ content: e.target.value })}
                        multiline
                        rows="7"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                </div>

                <Divider variant="inset" style={{marginLeft: 0, marginRight: 0, marginTop: 10}}/>

                <div style={{float : 'right'}} >
                    <Button variant="outlined" className={classes.button}
                            onClick={this.props.toggleDialogOpen}>
                        取消
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button}
                            type="submit">
                        儲存
                    </Button>
                </div>                
            </form>
        )
    };
}

ActForm.propTypes = {
    title: PropTypes.string,
    // StartTime: PropTypes.string,
    // EndTime: PropTypes.string,
    content: PropTypes.string,
    CreatorID: PropTypes.string,
    classes: PropTypes.object.isRequired,
};

// ActItem.defaultProps = {
//   CreatedTime: '2018-10-01T17:20:00.000',
// };  

export default withStyles(styles)(ActForm);