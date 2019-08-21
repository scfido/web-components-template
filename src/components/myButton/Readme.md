
### 基本用法

常规方式显示一个控件。

```js
<MyButton size="big">Push Me</MyButton>
```

```js inside Markdown

initialState = { isOpen: false };
<MyButton size="big">Push Me</MyButton>

```

自定义容器属性。

```js { "props": { "style": {"backgroundColor" : "lightgreen"} } }
<MyButton disabled={true}>禁用的按钮</MyButton>
```

禁用代码编辑器。

```jsx noeditor
<MyButton>Push Me</MyButton>
```

显示一段静态代码。

```jsx static
import React from 'react';
```

显示一段静态html源码。

```html
<MyButton size="big">Push Me</MyButton>
```
