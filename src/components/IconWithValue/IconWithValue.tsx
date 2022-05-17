import { Tooltip } from '@mui/material'
import React, { FC } from 'react'
import { IconClassName } from 'styles/icons'
import { Unit } from 'utils/constants'
import { Value, Wrapper, Icon } from './IconWithValue.styles'

interface Props {
  icon: IconClassName
  value: number
  label: string
  unit?: Unit
}

const IconWithValue: FC<Props> = ({ icon, value, unit, label }) => (
  <Wrapper>
    {/* TODO: Enlarge tooltip fontSize */}
    <Tooltip title={label} arrow>
      <Icon className={icon} />
    </Tooltip>
    <Value>{`${value} ${unit}`}</Value>
  </Wrapper>
)

export default IconWithValue
