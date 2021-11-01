import React from 'react';

type GreetingsProps = {
  name: string;
  optional?: string;  // 있어도 되고 없어도 되는 타입은 옵셔널 
};
/** React.FC의 장점
 *
 * 1. props.children 이 기본적으로 들어가있다.
 * 2. defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다
 * 
 * React.FC의 단점
 * defaultProps가 제대로 작동되지 않는다.
 */
const Greetings: React.FC<GreetingsProps> = ({ name }) => {
  return(

    <div>Hello, {name}</div>
  )
};

export default Greetings;