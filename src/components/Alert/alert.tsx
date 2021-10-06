import React, { useState } from 'react'
import classNames from 'classnames'

export type AlertTypes = 'default' | 'info' | 'success' | 'warning' | 'error'
export interface AlertProps {
  title?: string;
  closable?: boolean;
  showIcon?: boolean;
  onClose?: (() => void);
  children?: React.ReactNode;
  type?: AlertTypes
}

const Alert: React.FC<AlertProps> = (props) => {
  const { title, closable, type, showIcon, onClose, children } = props
  const classes = classNames('alert', {
    [`alert-${type}`]: type
  })
  const [visible, setVisible] = useState(true)
  const handleClick = () => {
    setVisible(false)
    if (onClose) {
      onClose()
    }
  }
  return (
    <div className={classes}>
      {title ? <h4 className="alert-title">{title}</h4> : null}
      <p className='alert-message'>{children}</p>
      {closable ? <span onClick={handleClick}>x</span> : null}
    </div>
  )
}


Alert.defaultProps = {
  closable: true,
  type: 'default'
}

export default Alert