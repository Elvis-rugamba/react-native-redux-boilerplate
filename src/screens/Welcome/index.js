import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Routes from 'constants/routes';
import * as Theme from 'constants/theme';

export const WelcomeScreen = ({ onPress, navigation }) => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.ACCENT,
      paddingTop: 72,
    }}
  >
    <TouchableOpacity onPress={() => { navigation.navigate(Routes.PROFILE_ROUTE); }}>
      <DisplayText>Tap me to go to Profile!</DisplayText>
    </TouchableOpacity>
  </ContainerView>
);

export default WelcomeScreen;
