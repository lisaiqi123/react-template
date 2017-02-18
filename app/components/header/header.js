/**
 * Created by Administrator on 2017/2/18.
 */
import React,{Component} from 'react';
import Styles from "./header.css";
export default class extends Component{
    render(){
        return (
            <div className={Styles['header']}>{this.props.title}</div>
        );
    }
}