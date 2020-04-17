import React, { Component } from 'react';
import { View, ActivityIndicator, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { loadImages, clearErro } from '../../actions/PrincipalAction';

class Principal extends Component {

    state = {
        loading: true,
    }

    componentDidMount(){
        this.props.loadImages();
        setTimeout(this.checkLoading, 3000);
    }

    checkLoading = () =>{
        this.setState({loading: false});
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                {this.props.error && !this.state.loading?
                    <Text style={styles.textError}>{this.props.error}</Text>
                :
                    null
                }

                {this.state.loading?
                    <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
                :
                    this.props.images && !this.props.error?
                        <FlatList
                            data={this.props.images}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            renderItem={({item}) => {
                                return (
                                    <View style={styles.card}>
                                        <Image
                                            style={{
                                                width: 150,
                                                height: 150,
                                            }}
                                            source={{ uri: item.thumbnailUrl }}
                                        />
                                    </View>
                                )
                            }}
                        />
                    :
                        null
                    
                }
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: 180,
        height: 180,
        margin: 10,
        alignItems: 'center',
    },
    loading: {
        marginTop: 100
    },
    textError: {
        fontSize: 18,
        margin: 50
    }
});

const mapStateToProps = state => ({
    images: state.PrincipalReducer.images,
    error: state.PrincipalReducer.error
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => {
        dispatch(loadImages());
    },
    clearErro: () => {
        dispatch(clearErro());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Principal);