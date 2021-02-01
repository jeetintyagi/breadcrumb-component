import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

const CollapseBreadcrumb = (props) => (
  <li className='collapse-breadcrumb' {...props}>
    <MdMoreHoriz />
  </li>
);

export default CollapseBreadcrumb;
