import React, { PureComponent } from 'react'
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
 * @version 1.0.2
 * @author [谢剑](https://github.com/scfido)
 * @author 朱志清
 */
export default class MyButton extends PureComponent {

    constructor(props){
        super(props);
        this.state = {perfix : "Demo "};
    }

    /**
     * 设置按钮文本的前缀。
     *
     * @param {string} text
     * @public
     */
    setPerfix(text) {
        this.setState({perfix: text})
    }

    render() {
        const { children, ...props } = this.props;
        return (
            <button className={styles.redButton} {...props} disabled={props.disabled} >{this.state.perfix} {children}</button>
        );
    }
}

MyButton.propTypes = {
    /** 按钮尺寸，分大中小三种
     *  
     * @deprecated 1.0.1-beta1
    */
    size: t.oneOf(['small', 'normal', 'big']),

    /** 按钮文字颜色
     * 加@ignore后，属性表中不在显示 
     * @ignore 
    */
    color: t.oneOf(['green', 'bule', 'rad']),

    /** 禁用按钮 
     * 
     * @since Version 1.0.0
    */
    disabled: t.bool,
}

MyButton.defaultProps = {
    size: 'normal',
    color: 'bule',
    disabled: false,
}