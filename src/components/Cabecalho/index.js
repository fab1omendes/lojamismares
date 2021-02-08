import styled from 'styled-components';

const LineHead = styled.div`
  padding: 0.6%;
  background-color: ${({ theme }) => theme.colors.primary.main};
`
LineHead.Link = styled.a`
  padding-left: 8%;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
`;

export default function Head(){
  return(
    <LineHead>
      <LineHead.Link>
        Login
      </LineHead.Link>   
      <LineHead.Link>
        Cart
      </LineHead.Link>   
      <LineHead.Link>
        30 dias para devolução e troca  
      </LineHead.Link>   
    </LineHead>

  )
}
