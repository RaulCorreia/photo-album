import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Icon } from 'native-base';
import { connect } from 'react-redux';

import { clearImages } from '../../actions/PrincipalAction';
import { Actions } from 'react-native-router-flux';

class More extends Component {

    _onPressButton = () => {
        this.props.clearImages();
        Actions.auth();
    }

    render() {
        return (
            <Container>

                <View style={styles.header}>
                    <Text style={styles.titleText} >Téste Tecnico CTIS</Text>
                    <Text style={styles.titleText}>Versão 1.0.2 (Número da build 10)</Text>
                </View>

                <View style={styles.line} />

                <TouchableOpacity style={styles.loginBtn} onPress={this._onPressButton}>
                    <View style={styles.viewBtn}>
                        <Icon type="MaterialCommunityIcons" style={{ color: '#000000' }} name={'logout'} />
                        <Text style={styles.titleText}>Sair</Text>
                    </View>
                </TouchableOpacity>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        margin: 10,
        alignItems: 'flex-start',
    },
    titleText: {
        fontSize: 20,
        color: '#aaaf'
    },
    line: {
        borderBottomColor: '#aaaf',
        borderBottomWidth: 1,
    },
    loginBtn: {
        backgroundColor:"#ffffff",
        height:50,
        justifyContent:"center",
        borderWidth: 0.5
    },
    viewBtn: {
        flexDirection: 'row', 
        marginLeft: 5
    }
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    clearImages: () => {
        dispatch(clearImages());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(More);