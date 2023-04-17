import React from 'react';
import {  View, Text, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';
import {increase, decrease, modify} from './action';

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        console.log(this.props.counter);
    }

    render(){
        return (
            <View style={styles.card}>
                <Text>
                    Amount Of data : {this.props.counter.value.length}
                </Text>
                <TouchableOpacity onPress={ () => this.props.increaseTheValue() }>
                  <Text style = { styles.search }>
                    Add Random Data
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.decreaseTheValue() }>
                  <Text style = { styles.search }>
                    Delete Random Data
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.modifyTheValue() }>
                  <Text style = { styles.search }>
                    Edit Random Data
                  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const mapStateToProps=state=>{
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = dispatch => {
	return{
        increaseTheValue : () => {
            dispatch(increase());
        },

        decreaseTheValue : () => {
            dispatch(decrease());
        },

        modifyTheValue : () => {
            dispatch(modify());
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);