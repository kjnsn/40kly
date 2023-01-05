import React from 'react'

import type { RootState } from '../../lib/state/store'
import { connect } from 'react-redux'

interface StatusProps {
  citySteamPressure: number
  maxPressure: number
}

const mapState = (state: RootState): StatusProps => ({
  citySteamPressure: state.game.city.steamPressure,
  maxPressure: state.game.city.maxSteamPressure
})

const connector = connect(mapState)

const Status = (props: StatusProps): JSX.Element => {
  return (<p>{props.citySteamPressure}/{props.maxPressure}</p>)
}

export default connector(Status)
