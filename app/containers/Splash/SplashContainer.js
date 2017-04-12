import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'

export default class SplashContainer extends Component {
  handleLoginFinished = (error, result)=> {
    if (error) {
      console.warn('Error in handleLoginFinished: ', error)
    } else if  (result.isCancelled) {
      console.log('auth cancelled')
    } else {
      console.log('Auth Successful')
    }
  }
  render () {
    return (
      <Splash onLoginFinished={this.handleLoginFinished} />
    )
  }
}
