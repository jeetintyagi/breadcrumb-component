import React from 'react';
import useBreadcrumbState from '../hooks/useBreadcrumbState';
import CollapseBreadcrumb from './CollapseBreadcrumb';

const BreadcrumbLink = ({ children, ...rest }) => (
  <li className='breadcrumb-item' {...rest}>
    {children}
  </li>
);

const BreadcrumbDivider = ({ children, ...rest }) => (
  <li className='breadcrumb-separator' {...rest}>
    {children}
  </li>
);

const Breadcrumb = ({ separator, collapse = {}, ...rest }) => {
  let children = React.Children.toArray(rest.children);

  const {
    expanded,
    expandTheBreadcrumb,
    collapseTheBreadcrumb
  } = useBreadcrumbState();

  const {
    breadcrumbLinksBefore = 1,
    breadcrumbLinksAfter = 1,
    maxBreadcrumbLimit = 4
  } = collapse;

  const totalbreadcrumbLinks = children.length;
  const lastIndex = totalbreadcrumbLinks - 1;

  // onDoubleCLick the breadcrumb is collapsed
  children = children.map((child, index) => (
    <BreadcrumbLink
      onDoubleClick={collapseTheBreadcrumb}
      key={`breadcrumb_item${index}`}
    >
      {child}
    </BreadcrumbLink>
  ));

  // onCLick on the breadcrumb-sepearator the breadcrumb is collapsed
  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbDivider
          key={`breadcrumb_sep${index}`}
          onClick={collapseTheBreadcrumb}
        >
          {separator}
        </BreadcrumbDivider>
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  // if breadcrumb bar is collapsed or
  // total breadcrumbs is less than the maximum limit
  // onCLick on the breadcrumb-svg "•••" the breadcrumb is expanded

  if (!expanded || totalbreadcrumbLinks <= maxBreadcrumbLimit) {
    children = [
      ...children.slice(0, breadcrumbLinksBefore),
      <CollapseBreadcrumb
        title='Expand'
        key='collapsed-seperator'
        onClick={expandTheBreadcrumb}
      />,
      ...children.slice(
        totalbreadcrumbLinks - breadcrumbLinksAfter,
        totalbreadcrumbLinks
      )
    ];
  }

  return <ol className='breadcrumb-item'>{children}</ol>;
};

export default Breadcrumb;
