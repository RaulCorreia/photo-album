import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View  } from 'react-native';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera';

class Print extends Component {

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                
                <RNCamera
                    ref={ref => { this.camera = ref; }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permissão de camera',
                        message: 'Precisamos dessa permissão para utilizar a camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancelar',
                    }}
                />

                <View style={styles.viewBtn}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> PRINT </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    viewBtn: {
        flex: 0, 
        flexDirection: 'row', 
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Print);