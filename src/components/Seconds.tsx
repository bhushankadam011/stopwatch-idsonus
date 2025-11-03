import React from 'react';

const Seconds = React.memo(({ value }: { value: number }) => {
  return <span>{value.toString().padStart(2, '0')}</span>;
});

export default Seconds;
