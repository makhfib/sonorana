import React, { Component } from "react";
import { TextInput, Keyboard } from "react-native";
import PropTypes from "prop-types";

export default class MultiLine extends Component {
  static propTypes = {
    maxLines: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ""
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.clear !== this.props.clear) {
      if (this.props.clear) {
        this.refs['_textInput'].clear()
      }
    }
  }

  onSubmitEditing = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      Keyboard.dismiss()
    }
  };

  onChangeText = text => {
    const { maxLines, onChangeText } = this.props;
    const lines = text.split("\n");

    if (lines.length <= (maxLines || 1)) {
      onChangeText(text);
      this.setState({ value: text });
    }
  };

  render() {
    const { onChangeText, multiline, value, ...other } = this.props;
    return (
      <TextInput
        {...other}
        ref="_textInput"
        multiline={true}
        value={this.state.value}
        onChangeText={this.onChangeText}
        onKeyPress={this.onSubmitEditing}
      />
    );
  }
}