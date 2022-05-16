import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconClassName } from 'styles/icons'
import { Unit } from 'utils/constants'
import IconWithValue from './IconWithValue'

export default {
  title: 'Icon with value',
  component: IconWithValue
} as ComponentMeta<typeof IconWithValue>

const Template: ComponentStory<typeof IconWithValue> = args => <IconWithValue {...args} />

export const MorningTemperature = Template.bind({})

MorningTemperature.args = {
  icon: IconClassName.Sunrise,
  value: 25,
  unit: Unit.DegreeCelsius
}

export const Humidity = Template.bind({})
Humidity.args = {
  icon: IconClassName.Humidity,
  value: 37,
  unit: Unit.Percent
}
