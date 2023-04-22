import React from 'react'
import styles from './styles.module.scss'

import arrowIcon from '../../assets/images/icon-arrow.svg'

interface ConvertButtonProps extends React.HTMLAttributes<HTMLDivElement> { 
}

const ConvertButton: React.FC<ConvertButtonProps> = ({ ...props }) => {
  return (
    <div className={styles['convert-button']} {...props}>
      <img className={styles['convert-button-image']} src={arrowIcon} alt="Arrow Icon" />
    </div>
  )
}

export default ConvertButton;