import React, { PropTypes } from 'react'
import { TabBarIOS, Text } from 'react-native'
import { colors } from '~/styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { HomeContainer, LeaderBaordContainer } from '~/containers'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired,
}
export default function FooterTabs (props) {
  console.log('here', props);
  return (
    <TabBarIOS tintColor={colors.active}>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={props.activeFooterBar === 'home'}
        onPress={() => props.onTabSelect('home')}>
        <HomeContainer navigator={props.navigator}/>
      </Icon.TabBarItem>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-trophy-outline'
        title='Leaderboard'
        selected={props.activeFooterBar === 'leaderboard'}
        onPress={() => props.onTabSelect('leaderboard')}>
        <Leaderboard navigator={props.navigator}/>
      </Icon.TabBarItem>
    </TabBarIOS>
  )
}
