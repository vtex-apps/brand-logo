//react/Countdown.tsx
import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'
interface CountdownProps {
  currentDate: string
}
const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({currentDate = DEFAULT_TARGET_DATE}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
      hours: '00',
      minutes: '00',
      seconds: '00'
  })

  tick(currentDate, setTime)

  return (
    <h1></h1>
    // <div>
    //   <h1>{ `Promotion countdown: ${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
    // </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    currentDate: {
      title: 'Current Date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    }
  },
}

export default Countdown
