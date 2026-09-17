import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

interface CommonProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

interface LinkButtonProps extends CommonProps {
  to: string
  href?: undefined
}

interface AnchorButtonProps extends CommonProps {
  href: string
  to?: undefined
}

interface NativeButtonProps extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  to?: undefined
  href?: undefined
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props
  const classes = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} target={props.href.startsWith('http') ? '_blank' : undefined} rel={props.href.startsWith('http') ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  const { to: _to, href: _href, variant: _v, className: _c, children: _ch, ...rest } = props as NativeButtonProps
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
