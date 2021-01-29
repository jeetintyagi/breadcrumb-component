import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

const CollapseBreadcrumb = (props) => (
  <li className='breadcrumb-collapser' {...props}>
    <MdMoreHoriz />
  </li>
);

export default CollapseBreadcrumb;
