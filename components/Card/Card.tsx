import React from 'react'
import { cn } from '@/lib/utils'
import styles from './Card.module.styl'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  footer?: React.ReactNode
}

function Card({ title, children, footer, className, ...props }: CardProps) {
  return (
    <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', styles.card, className)} {...props}>
      {title && (
        <div className={cn('flex flex-col space-y-1.5 p-6', styles.cardHeader)}>
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
        </div>
      )}
      <div className={cn('p-6 pt-0', styles.cardContent)}>{children}</div>
      {footer && (
        <div className={cn('flex items-center p-6 pt-0', styles.cardFooter)}>
          {footer}
        </div>
      )}
    </div>
  )
}

export { Card }