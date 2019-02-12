import React from 'react';
import ActItem from './ActItem';

class ActivityList extends React.Component {
    render () {
      let items = this.props.items.map((item, index) => {
        return (
          <ActItem key={index} index={index} item={item}  
                   toggleDialogOpen={this.props.toggleDialogOpen}
                   onRemove={this.props.removeItem}/>
        );
      });
      return (
        <div> {items} </div>
      );
    }
  }

  export default ActivityList;