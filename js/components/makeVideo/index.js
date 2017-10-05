import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    List,
    ListItem
} from "native-base";
import { TouchableOpacity } from 'react-native';

class MakeVideo extends Component {
    static navigationOptions = {
        header: null
    };

    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func
    };

    render() {
        console.log(this.props);

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back"/>
                        </Button>
                    </Left>

                    <Body>
                        <Title>New video</Title>
                    </Body>

                    <Right/>
                </Header>

                <Content padder>
                    <List>
                        {this.props.parts.map((part, i) => (
                            <ListItem icon key={i}>
                                <Left>
                                    <Icon name="add"/>
                                </Left>
                                <Body>
                                    <TouchableOpacity>
                                        <Text>{part.name}</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right/>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer())
    };
}

const mapStateToProps = state => ({name: state.user.name, parts: state.parts});

export default connect(mapStateToProps, bindAction)(MakeVideo);
