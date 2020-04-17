import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

class Print extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                   <Text>Print</Text>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Print);