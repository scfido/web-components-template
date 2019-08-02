import React, {PureComponent} from 'react'
import t from 'prop-types'
import styles from "./style.css";

/**
 * 在这里使用__Markdown__语法编写组件的说明  
 * 使用 JSDoc 格式介绍组件。
 * - 功能1
 * - 功能2
 * - 功能3
 * 
 * @visibleName 自定义按钮 🐻  
 * 
 */
export default class MyButton extends PureComponent{
    
    render() {
        const { children, ...props } =this.props;
        return (
            <button className={styles.redButton} {...props} >Demo {children}</button>
        );
    }
}

MyButton.propTypes = {
    /** 按钮尺寸，分大中小三种 */
    size: t.oneOf(['small', 'normal', 'big']),

    /** 按钮文字颜色 */
    color: t.oneOf(['green', 'bule', 'rad']),

    /** 禁用按钮 */
    disabled: t.bool,
}

MyButton.defaultProps = {
    size: 'normal',
    color: 'bule',
    disabled: false,
}