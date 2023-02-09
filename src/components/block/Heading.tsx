import React from 'react';

interface Heading {
  text: string;
}

const Heading = ({ text }: Heading) => <h2 className="text-2xl bg-amber-300 p-1">{text}</h2>;

export default Heading;
