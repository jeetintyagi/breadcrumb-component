import { useState } from 'react';

const useBreadcrumb = () => {
  const [expanded, setExpanded] = useState(false);

  const expandTheBreadcrumb = () => setExpanded(true);
  const collapseTheBreadcrumb = () => {
    setExpanded(false);
  };
  // to manage the close and expanded state of breadcrumb items
  return {
    expanded,
    expandTheBreadcrumb,
    collapseTheBreadcrumb
  };
};

export default useBreadcrumb;
