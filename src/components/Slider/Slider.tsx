import React, { useState, useEffect, useMemo, useCallback } from 'react'
import cx from 'classnames'

import { Container } from 'src/components'

import styles from './slider.module.scss'

interface SliderProps {
    className?: string
    gap?: number
    color?: string
    disabled?: boolean
}

const Slider = (props: React.PropsWithChildren<SliderProps>) => {
    const { className, gap = 0, color, disabled, children } = props

    const [currentHeight, setCurrentHeight] = useState<number | null>(null)
    const [currentWidth, setCurrentWidth] = useState<number | null>(null)

    const childRef = useCallback((node: HTMLDivElement | null) => {
        if (node){
            const { scrollHeight, scrollWidth } = node
            if (scrollHeight) {
                setCurrentHeight(scrollHeight)
            }

            if (scrollWidth) {
                setCurrentWidth(scrollWidth)
            }
        }
    }, [])

    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
    
    const handleSelect = (index: number) => {
      if (!disabled){
        setCurrentCardIndex(index)
      }
    }

    const leftOffset = (() => {
        if (disabled){
            return undefined
        }

        const containerOffset = Number(styles.containerPadding.replace('px', ''))
        return currentCardIndex !== 0 ? (`-${((currentWidth || 0) + gap) * currentCardIndex - containerOffset}px`) : undefined
    })()
    
    return useMemo(() => (
      <>
          <div 
            className={cx(styles.wrapper, disabled && styles.disabled, className)} 
            style={{ height: !disabled && currentHeight ? `${currentHeight}px` : undefined }}
           >
              <div className={styles.inner} style={{ left: leftOffset }}>
                  {React.Children.map(children, (child, i) => (
                    <div 
                        key={i}
                        className={styles.child} 
                        ref={!i ? childRef : undefined}
                        style={{ marginRight: !disabled ? `${gap}px` : undefined }}
                        onClick={() => handleSelect(i)}
                    >
                        {React.cloneElement(child as React.ReactElement)}
                    </div>
                  ))}
              </div>
          </div>
        
          {!disabled ?
            <Container className={cx(styles.buttons, color && styles[color])}>
                {Array(React.Children.count(children)).fill(1).map((card, i) => (
                    <span 
                        key={i} 
                        className={cx(currentCardIndex === i && styles.active)}
                        onClick={() => handleSelect(i)}
                    />
                ))}
            </Container>
          : null}
      </>
    ), [React.Children.count(children), currentCardIndex, currentHeight, currentWidth, disabled])
  }

  export default Slider