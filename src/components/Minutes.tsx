import React from 'react';

const Minutes = React.memo(({ value }: { value: number }) => {
  return <span>{value.toString().padStart(2, '0')}</span>;
});

export default Minutes;
