import styles from './Label.module.css'
import { FC } from 'react'

interface LabelProps {
    text: string
}

const Label:  FC<LabelProps> = ({ text }) => {
  return (
    <span className={styles.label}>{text}</span>
  )
}
export default Label