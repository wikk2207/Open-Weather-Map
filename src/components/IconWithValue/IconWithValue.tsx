import React, { FC } from 'react'
import { IconClassName } from 'styles/icons'
import { Unit } from 'utils/constants'

interface Props {
  icon: IconClassName
  value: number
  unit?: Unit
}

const IconWithValue: FC<Props> = ({ icon, value, unit }) => (
  <div>
    <i className={icon} /> {value}
    {unit && ` ${unit}`}
  </div>
)

export default IconWithValue
