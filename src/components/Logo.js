import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <p>
        <span className='the'> the </span>
        <span>Shred</span>Shed
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: ;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
  .the {
    color: var(--clr-grey-2);
    text-transform: lowercase;
    font-size: 0.9rem;
  }
`;

export default Logo;
