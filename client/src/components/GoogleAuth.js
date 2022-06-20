import React from 'react';
//543635281747-httaq6fs9dh8vgch3bo0a638n8q945vr.apps.googleusercontent.com
class GoogleAuth extends React.Component{
    state={isSignedIn:null};

    componentDidMount(){
        window.gapi.load('client:auth',() => {
            window.gapi.client.init({
                client_id:'1098729312685-k2pjqf8dfb0m8vgga4er74k0s5mabv51.apps.googleusercontent.com',
                scope: 'email'
                
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()}).then(err=>console.log(err));
            });
        });
    }

renderAuthButton(){
    if(this.state.isSignedIn === null){
        return <div>I dont know if we are signed in</div>;
    }else if(this.state.isSignedIn){
        return <div>I am signed in !</div>
    }else {
        return <div>I am not signed in</div>
    }
}

    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;