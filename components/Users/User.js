import React,{ PureComponent } from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class User extends PureComponent {
	
	render() {
      return (
        <TouchableOpacity style={{flex:1, flexDirection:'row'}}
			onPress={()=>{
          			 const {followers_url} = this.props.user;
          			 this.props.navigation.navigate('Followers', {
			              followers_url,
			              title:`Followers by ${this.props.children}`
            		});
            		console.log(this.props);
          		}}
        >
          <Image style={{width:100, height:100}} width={100} heigth={100} source={{uri:this.props.user.avatar_url}} />
          <View style={{paddingLeft:20}}>
				<Text style={{fontSize:20}}>{this.props.children}</Text>
          		<Text onPress={()=>Linking.openURL(this.props.user.html_url) }>{this.props.user.html_url}</Text>          	
          </View>
	    </TouchableOpacity>
      );
  }
}
