import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';


class TabIcon extends Component {
	render() {
		return (
			<View style={styles.viewItem}>
				<Icon style={{ color: '#000000' }} type={this.props.type} name={this.props.iconName} />
				<Text style={styles.textItem}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewItem: {
		flex: 1, 
		alignItems: 'center',
	},
    textItem: { 
        fontSize: 11,
        color: '#000000'
	}
});

const mapStateToProps = state => ({
});


export default connect(mapStateToProps)(TabIcon);