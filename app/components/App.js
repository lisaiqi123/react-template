import React,{Component} from 'react';
import MyHeader from "./header/header";
export default class extends Component{

  render(){
    return(
      <div>
        <MyHeader title="首页"/>
        <MyHeader title="列表"/>
      </div>
    )
  }
}
