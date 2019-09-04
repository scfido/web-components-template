import React, { useState } from 'react';

/**
 * Hook组件
 */
// export default class HookComp extends React.PureComponent {
//     render(){
//         return <div>test</div>
//     }
// }

export default function HookComp() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}