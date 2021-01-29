import { useState } from 'react';

const useBreadcrumb = () => {
  const [expanded, setExpanded] = useState(false);

  const open = () => setExpanded(true);
  // to manage the close and expanded state of breadcrumb items
  return {
    expanded,
    open
  };
};

export default useBreadcrumb;
