import React from 'react';
import Heading from './Heading';

interface Block {
  children: React.ReactNode;
  title: string;
  customClasses?: string;
}

const Block = ({ children, title, customClasses = 'w-full' }: Block) => {
  const classes = 'bg-amber-100 ' + customClasses;

  return (
    <div className={classes}>
      <Heading text={title} />
      {children}
    </div>
  );
};

export default Block;
