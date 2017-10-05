import React, { Component } from 'react';
import Home from '../components/home/';
import MakeVideo from '../components/makeVideo';
import HomeDrawerRouter from './HomeDrawerRouter';
import { StackNavigator } from 'react-navigation';

HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
    header: null
});

export default (StackNav = StackNavigator({
    Home: { screen: Home },
    MakeVideo: { screen: MakeVideo }
}));
