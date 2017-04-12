import React, { PropTypes } from 'react'
import { StyleSheet, DrawerLayoutAndroid, Text } from 'react-native'
import { HomeContainer, LeaderboardContainer } from '~/containers'
import Drawer from './Drawer'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired
}
export default function FooterTabs (props) {
  const closeDrawer = () => this.drawer.closeDrawer()
  return (
    <DrawerLayoutAndroid
      ref={(drawer) => this.drawer = drawer}
      drawerWidth={290}
      renderNavigationView={() => (
        <Drawer
          close={closeDrawer}
          activeFooterTab={props.activeFooterTab}
          onTabSelect={props.onTabSelect}/>
      )}>
      {props.activeFooterTab === 'home'
        ? <HomeContainer navigator={props.navigator}/>
        : <LeaderboardContainer navigator={props.navigator}/>}
    </DrawerLayoutAndroid>
  )
}
const styles = StyleSheet.create({
})
