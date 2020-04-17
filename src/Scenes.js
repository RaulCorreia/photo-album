import React from 'react';
import { Scene, Actions, Stack } from 'react-native-router-flux';

import Login from './components/signIn/Login';
import TabIcon from './components/principal/TabIcon'
import Principal from './components/principal/Principal';
import Print from './components/principal/Print';
import More from './components/principal/More';

export const Scenes = Actions.create(
	<Scene key='root'>

		<Stack key='auth' hideNavBar>
			<Scene key='login' initial component={Login} title="Login" hideNavBar />
		</Stack>

		<Stack key='main' tabs lazy tabBarPosition={'bottom'} swipeEnabled={false} showLabel={false} animationEnabled={false} default="principal" tabBarStyle={{ backgroundColor: '#ffffff' }} hideNavBar>
			<Scene key='principal' initial component={Principal} title={'Início'} type='FontAwesome' iconName='feed' icon={TabIcon} hideNavBar />
            <Scene key='print' component={Print} title={'Print'} type='FontAwesome' iconName='camera' icon={TabIcon} hideNavBar />
			<Scene key='more' component={More} title={'More'} type='MaterialCommunityIcons' iconName='dots-horizontal' icon={TabIcon} hideNavBar />
		</Stack>

	</Scene>
);
