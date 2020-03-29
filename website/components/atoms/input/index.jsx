
  import React from 'react';
  import styled from '@emotion/styled';

  const TextInput = (props) => {
    return (
      <>
      <style jsx>{`
      input {
        padding: .75em;
      }
      `}</style>
    <input {...props} />
    </>
    )
  }

  export {
    TextInput
  }
  