import React, { FC } from 'react'
import { IconClassName } from 'styles/icons'
import { Unit } from 'utils/constants'
import { Title } from './Statisctics.styles'

interface Props {
  title: string
  icon: IconClassName
  unit: Unit
  min: number | null
  max: number | null
  mean: number | null
  mode: number | null
}

const Statictics: FC<Props> = ({ title, icon, unit, min, max, mean, mode }) => {
  const getValue = (value: number | null): string => (value ? `${value.toFixed(2)} ${unit}` : '-')

  return (
    <div>
      <Title>
        <span>{title}</span>
        <i className={icon} />
      </Title>
      <p>Min: {getValue(min)}</p>
      <p>Max: {getValue(max)}</p>
      <p>Mean: {getValue(mean)}</p>
      <p>Mode: {getValue(mode)}</p>
    </div>
  )
}

export default Statictics
