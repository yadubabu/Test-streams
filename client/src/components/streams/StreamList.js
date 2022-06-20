import React from 'react';
import {connect} from 'react-redux';
import { fetchStreams } from '../../actions';
import {Link} from 'react-router-dom'

class StreamList extends React.Component{
  componentDidMount(){
   this.props.fetchStreams();
  
  }

delStream=(e)=>{
  
    this.props.streams.map(str=>{
      return (
        <div>{str.id}</div>
      )
         })
}

  renderList(){
    

    return this.props.streams.map(stream=>{
      return (
        <div className='ui segment' key={stream.id}>
          <i className='large middle aligned icon camera'/>          {this.renderAdmin(stream)}
          <div className='content'>{stream.title}</div>
          <div className='description'>{stream.description}</div>

        </div>
      );
    });
  }
renderAdmin(stream){
  if(stream.id===this.props.currentUserId){
    return(
      <div className='right floated content'>
        <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
        <button className='ui button negative'>
          Delete
        </button>
      </div>

    )
  }
}

renderCreate(){
  if(this.props.isSignedIn===true){
    return(
      <div style={{textAlign:"right"}}>
        <Link to='/streams/new' className='ui button primary'>Create Stream</Link>
      </div>
    )
  }
  
}
  render(){
    return(
      <div>
        <h2>Streams</h2>
        <div>
            {this.renderList()}
            
        </div>
        {this.renderCreate()}
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    streams:Object.values(state.streams),
    currentUserId:1,
     isSignedIn:true,
  };
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);