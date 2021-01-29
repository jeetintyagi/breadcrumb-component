import React from 'react'
import useBreadcrumb from '../hooks/useBreadcrumb'
import CollapseBreadcrumb from './CollapseBreadcrumb'

const BreadcrumbItem = ({ children, ...props }) => (
  <li className='breadcrumb-item' {...props}>
    {children}
  </li>
)

const BreadcrumbSeparator = ({ children, ...props }) => (
  <li className='breadcrumb-separator' {...props}>
    {children}
  </li>
)

const Breadcrumb = ({ separator, collapse = {}, ...props }) => {
  let children = React.Children.toArray(props.children)

  const { expanded, open } = useBreadcrumb()

  const { itemsBefore = 1, itemsAfter = 1, max = 4 } = collapse

  const totalItems = children.length
  const lastIndex = totalItems - 1

  children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ))

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
          {separator}
        </BreadcrumbSeparator>,
      )
    } else {
      acc.push(child)
    }
    return acc
  }, [])

  if (!expanded || totalItems <= max) {
    children = [
      ...children.slice(0, itemsBefore),
      <CollapseBreadcrumb
        title='Expand'
        key='collapsed-seperator'
        onClick={open}
      />,
      ...children.slice(totalItems - itemsAfter, totalItems),
    ]
  }

  return <ol>{children}</ol>
}

export default Breadcrumb