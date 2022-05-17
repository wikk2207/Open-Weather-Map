import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import WeatherCard from './WeatherCard'

export default {
  title: 'Weather card',
  component: WeatherCard
} as ComponentMeta<typeof WeatherCard>

const Template: ComponentStory<typeof WeatherCard> = args => <WeatherCard {...args} />

export const ColdWeather = Template.bind({})

ColdWeather.args = {
  date: new Date(),
  tempMorning: 3,
  tempDay: 9,
  tempNight: -1,
  humidity: 33
}
