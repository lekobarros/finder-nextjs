import styled from 'styled-components';

interface Alex {
  backgroundColor: string;
  alex: number;
}

export default styled.button<Alex>`
  background-color: ${(props) => props.backgroundColor};
`