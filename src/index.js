import React from 'react';
import ReactDOM from 'react-dom';
import ActivityHeader from './components/ActivityHeader';
import ActivityList from './components/ActivityList';
import ActDetail from './components/ActDetail';
import AppBar from '@material-ui/core/AppBar';
import actItemsJson from './data/actItems.json'

var actItems = actItemsJson;
// var actItems = [
//   { "index" : 0, "title" : ".net core", "content" : ".net core", "StartTime" : "2018-10-20T13:20:00.000", "EndTime" : "2018-10-20T17:20:00.000", "CreatedTime" :"2018-10-01T17:20:00.000", "CreatorID" : "王小明" , "tags" : ["frontend","backend"]},
//   { "index" : 1, "title" : "WebAPI", "content" : "WebAPI", "StartTime" : "2018-10-20T13:20:00.000", "EndTime" : "2018-10-20T17:20:00.000", "CreatedTime" :"2018-10-01T17:20:00.000", "CreatorID" : "王大閎" , "tags" : "backend"},
//   { "index" : 2, "title" : "MVC5", "content" : "MVC5", "StartTime" : "2018-10-20T13:20:00.000", "EndTime" : "2018-10-20T17:20:00.000", "CreatedTime" :"2018-10-01T17:20:00.000", "CreatorID" : "張中茗" , "tags" : "backend"},
//   { "index" : 3, "title" : "Vuejs", "content" : "Vuejs", "StartTime" : "2018-10-20T13:20:00.000", "EndTime" : "2018-10-20T17:20:00.000", "CreatedTime" :"2018-10-01T17:20:00.000", "CreatorID" : "蔡小英" , "tags" : "frontend"}
// ];
// actItems.push({index: 1, value: "learn react", done: false});
// actItems.push({index: 2, value: "Go shopping", done: true});
// actItems.push({index: 3, value: "buy flowers", done: true});

class ActivityApp extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDialogOpen = this.toggleDialogOpen.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);    
    this.state = {
      isDialogOpen: false,
      isConfirmOpen: false,
      allActs: [],
      actItem: {index : undefined} //初始化actItem是一個只有index的物件
    };
  }

  componentDidMount(){    
    
    //第一次render後載入Jsondata
    this.setState({allActs: actItems});
    
    // let myHeaders = new Headers({
    //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
    //   'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
    //   'Access-Control-Request-Method': 'PUT',
    //   'Access-Control-Request-Headers': 'accept, x-my-custom-header'
    // });

    // fetch('http://localhost:34024/api/activities', {
    //   // headers: myHeaders,
    //   mode: 'cors'
    // })
    // .then(function (response) {
    //   console.log(response);
    //   return response.json();
    // })
    // .then((actItems) => this.setState({ allActs: actItems }));
  
    // fetch('./data/actItems.json')
    // .then((res) => res.text())
    // .then((text) => console.log(text))

  }

  //開啟活動內容頁面
  toggleDialogOpen(actItem){         
    // console.log(actItem);

    //在這裡寫判斷，如果close，初始化actItem
    this.setState({ 
      isDialogOpen: !this.state.isDialogOpen ,
      actItem: actItem            
    });
  };

  //新增活動
  addItem(actItem){
    actItems.unshift({
        index : actItems.length + 1,
        title : actItem.title,
        StartTime : actItem.StartTime,
        EndTime : actItem.EndTime,
        content : actItem.content,
        CreatorID : actItem.CreatorID
    });
    this.setState({allActs: actItems});
  }

  //編輯活動
  editItem(editedItem){
    // console.log(editedItem);
    const target = actItems.find((actItem) => actItem.index == editedItem.index);
    // console.log(target);
    target.title = editedItem.title;
    target.StartTime = editedItem.StartTime;
    target.EndTime = editedItem.EndTime;
    target.content = editedItem.content;
    target.CreatorID = editedItem.CreatorID;
    this.setState({allActs: actItems});
  }

  //刪除活動
  removeItem(itemIndex){
    actItems.splice(itemIndex, 1);
    this.setState({allActs: actItems});
  }

  render() {
    // console.log(typeof this.state.actItem);
    return (
      <div>
          <ActivityHeader 
            toggleDialogOpen={this.toggleDialogOpen}/>
          <ActivityList 
            items={this.state.allActs}
            toggleDialogOpen={this.toggleDialogOpen} 
            removeItem={this.removeItem}/>

          <ActDetail           
            isDialogOpen={this.state.isDialogOpen} 
            toggleDialogOpen={this.toggleDialogOpen}
            actItem={this.state.actItem}
            addItem={this.addItem} 
            editItem={this.editItem}/>
      </div>
    );
  }
}

// ActivityApp.propTypes = {
//   title: PropTypes.string,
//   // StartTime: PropTypes.string,
//   // EndTime: PropTypes.string,
//   content: PropTypes.string,
//   CreatorID: PropTypes.string
// };

ReactDOM.render(<ActivityApp />, document.getElementById('app'));