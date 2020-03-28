
  import React from 'react';
  import styled from '@emotion/styled';

  const TextInput = (props) => {
    const Input = styled.input`
    padding: .75rem
    `
    return (
      <Input {...props}></Input>
    )
  }

  export {
    TextInput
  }
  