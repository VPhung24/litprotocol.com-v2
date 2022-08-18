import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
//import { useLocation } from 'react-router-dom'

import { useWindowSize } from 'src/hooks'

interface PortalTargetProps {
  className?: string
  id: string
  media: 'desktop' | 'mobile'
}

const PortalTarget = (props: PortalTargetProps) => {
  const { className, id, media } = props

  return <div className={className} id={`${media}_${id}`} />
}

interface PortalWrapperProps {
  id: string
  width?: number
}

const PortalWrapper = (props: React.PropsWithChildren<PortalWrapperProps>) => {
  const { id, width = 768, children } = props

  //const location = useLocation()

  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width) {
      const newPortalTarget = document.getElementById(
        `${windowSize.width > width ? 'desktop' : 'mobile'}_${id}`,
      )
      setPortalTarget(newPortalTarget)
    }
  //}, [id, windowSize.width, location.pathname])
  }, [id, windowSize.width ])

  if (!portalTarget) {
    return null
  }

  return createPortal(children, portalTarget)
}

export default {
  Target: PortalTarget,
  Wrapper: PortalWrapper,
}
