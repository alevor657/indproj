import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import BlankPage2 from '../blankPage2';
import DrawBar from '../DrawBar';
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class Home extends Component {
    render() {
        let menu = this.props.list;
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => DrawerNav.navigate('DrawerOpen')}
                        >
                            <Icon active name="menu" />
                        </Button>
                    </Left>

                    <Body>
                        <Title>Home</Title>
                    </Body>

                    <Right/>
                </Header>
                <Content>
                    <Grid style={styles.mt}>
                        <Row>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={() =>
                                    this.props.navigation.navigate('Profile')}
                            >
                                <Text style={styles.text}>{menu[0]}</Text>
                            </TouchableOpacity>
                        </Row>
                        <Row>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={() =>
                                    this.props.navigation.navigate('MyVideos')}
                            >
                                <Text style={styles.text}>{menu[1]}</Text>
                            </TouchableOpacity>
                        </Row>
                        <Row>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={() =>
                                    this.props.navigation.navigate('MakeVideo')}
                            >
                                <Text style={styles.text}>{menu[2]}</Text>
                            </TouchableOpacity>
                        </Row>
                        <Row>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={() =>
                                    this.props.navigation.navigate('Tutorial')}
                            >
                                <Text style={styles.text}>{menu[3]}</Text>
                            </TouchableOpacity>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

Home.navigationOptions = {
    header: null
};

Home.propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
};

function bindAction(dispatch) {
    return {
        setIndex: index => dispatch(setIndex(index)),
        openDrawer: () => dispatch(openDrawer())
    };
}
const mapStateToProps = state => ({
    name: state.user.name,
    list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
    {
        Home: { screen: HomeSwagger },
        BlankPage2: { screen: BlankPage2 }
    },
    {
        contentComponent: props => <DrawBar {...props} />
    }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
    DrawerNav = navigation;
    return {
        header: null
    };
};
export default DrawNav;
