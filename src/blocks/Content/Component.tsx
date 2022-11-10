import React from 'react';
import useStyles from './css';
import { Type } from '.';

const colStyles = {
  full: {
    cols: 12,
  },
};

const Content: React.FC<Type> = ({
  columns,
}) => {
//   const classes = useStyles();

  return (
    <div className="content">
      //  rest of content
    </div>
  );
};

export default Content;
