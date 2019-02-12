import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({  
  avatar: {
    backgroundColor: red[500],
  },
  card:{
    marginRight: '50px',
    marginLeft: '50px',
    marginTop: '50px', 
    marginBottom: '50px'
  },
  title:{
    fontSize: 'x-large',
    color: 'black'
  },
  subheader:{
    color: 'gray'
  },
  tagsDiv:{
    marginLeft: 19,
    marginTop: -10
  },
  tagstitle:{
    color: 'rgb(77, 190, 152)',
    fontSize: 'smaller'
  }  
});

class ActItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickMenu = this.onClickMenu.bind(this);      
      this.handleCloseMenu = this.handleCloseMenu.bind(this);
      this.onClickEdit = this.onClickEdit.bind(this);
      this.onClickRemove = this.onClickRemove.bind(this);    
      this.state = {
        isMenuOpen: false,
        anchorEl: this
      };
    }

    onClickMenu(event){ //操作選單menu
      const flag = !this.state.isMenuOpen;      
      this.setState({ 
        isMenuOpen: flag,
        anchorEl: event.currentTarget
      });
    }

    handleCloseMenu(){
      const flag = !this.state.isMenuOpen;  
      this.setState({ 
        isMenuOpen: flag        
      });
    }

    onClickEdit(){
      this.props.toggleDialogOpen(this.props.item);    
      this.handleCloseMenu();      
    }

    onClickRemove(){
      var index = parseInt(this.props.index);
      this.props.onRemove(index);
      this.handleCloseMenu();
    }

    render () {
      const { classes } = this.props;

      //標籤item
      // var tags = <div className={classes.tagsDiv}>
      //               {this.props.item.tags.map((tag, index)=>
      //                 <span key={index} component="p" className={classes.tagstitle}>
      //                   #{tag}&nbsp;
      //                 </span>
      //               )}
      //             </div>
        
      return(
        <Card  className={classes.card}>
          
          {/* 標題 */}
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe"  className={classes.avatar}>
                {this.props.item.CreatorID}
              </Avatar>
            }
            action={
              <div>
                <IconButton onClick={this.onClickMenu}>
                  <MoreVertIcon/>
                </IconButton>
                <Menu
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.isMenuOpen}
                  onClose={this.onClickMenu}>              
                  <MenuItem onClick={this.onClickEdit}>編輯</MenuItem>
                  <MenuItem onClick={this.onClickRemove}>刪除</MenuItem>
                </Menu>
              </div>
            }
            title={<div className={classes.title}>{this.props.item.title}</div>}
            subheader={<div className={classes.subheader}>{this.props.item.StartTime}</div>}
          />

          {/* 標籤 */}
          {/* {tags} */}

          {/* 分割線 */}
          <Divider variant="inset" style={{marginLeft: 20, marginRight: 20, marginTop: 10}}/>

          {/* 內容 */}
          <CardContent style={{marginBottom: 20}}>
            <Typography component="p">
              {this.props.item.content}
            </Typography>
          </CardContent>
          
          {/* 底部功能 */}
          <CardActions style={{float : 'right'}}>            
              <IconButton aria-label="Add to favorites" >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
          </CardActions>
          
        </Card>
      );  
    }
  }

  ActItem.propTypes = {
    title: PropTypes.string,
    // StartTime: PropTypes.string,
    // EndTime: PropTypes.string,
    content: PropTypes.string,
    CreatorID: PropTypes.string,
    classes: PropTypes.object.isRequired
  };

  // ActItem.defaultProps = {
  //   CreatorID: 'unknown',
  // };
  
  export default withStyles(styles)(ActItem);