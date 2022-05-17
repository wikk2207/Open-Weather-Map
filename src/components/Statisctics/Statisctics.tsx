import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IconClassName } from 'styles/icons'
import { Unit } from 'utils/constants'
import { Title, Wrapper, Item } from './Statisctics.styles'

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
  const { t } = useTranslation()

  const getValue = (value: number | null): string => (value ? `${value.toFixed(2)} ${unit}` : '-')

  return (
    <Wrapper>
      <Title>
        <span>{title}</span>
        <i className={icon} />
      </Title>
      <Item>
        <p>{t('statistics.min')}</p>
        <p>{getValue(min)}</p>
      </Item>
      <Item>
        <p>{t('statistics.max')}</p>
        <p>{getValue(max)}</p>
      </Item>
      <Item>
        <p>{t('statistics.mean')}</p>
        <p>{getValue(mean)}</p>
      </Item>
      <Item>
        <p>{t('statistics.mode')}</p>
        <p>{getValue(mode)}</p>
      </Item>
    </Wrapper>
  )
}

export default Statictics
