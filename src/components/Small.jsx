import React from 'react';

export const Small = React.memo(({ value }) => {
    console.log('me dibuje X(');
    return <small>{value}</small>;
});
