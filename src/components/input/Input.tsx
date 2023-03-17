import { cls } from '@/utils/cls'
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
  label?: string
  onIconClick?: () => void
  description?: string
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { icon, className, label, description, onIconClick, ...rest } = props

    return (
      <div className="input__wrapper">
        {label && <label htmlFor="input">{label}</label>}
        {description && <p className="input__description">{description}</p>}
        <div className="input__body">
          <input
            className={cls(className, 'input')}
            spellCheck="false"
            ref={ref}
            placeholder={label}
            {...rest}
          />
          {icon && (
            <div onClick={onIconClick} className="input__icon">
              {icon}
            </div>
          )}
        </div>
      </div>
    )
  },
)

export { Input }
