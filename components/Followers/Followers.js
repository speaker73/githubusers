import React,{ Component } from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import axios from 'axios';
import {User} from '../Users';

class Followers extends Component {
	static navigationOptions = ({ navigation }) => {
    	const { params } = navigation.state;
	    return {
	      title: params ? params.title : 'Followers',
	    }
  	};
	constructor(props) {
	  super(props);
	  this.state = {
	  	data:null
	  };
	}
	async getFollowers(){
		const {followers_url} = this.props.navigation.state.params;
		const {data, status} = await axios({
			method:'get',
			url:followers_url
		});
		if(status === 200){
			this.setState({data});
		}	
	}
	renderFollowers(){
		return this.state.data.map((follower)=>{
			return <User navigation={this.props.navigation} user={follower}>{follower.login}</User>
		});
	}
	componentDidMount(){
		this.getFollowers();
	}
	render() {
      return (
        <ScrollView style={{flex:1, flexDirection:'column'}}>
          {this.state.data && this.renderFollowers()}
	    </ScrollView>
      );
  }
}


export default Followers;