import React, {PureComponent} from 'react'
import t from 'prop-types'
import styles from "./style.less";

/**
 * 自定义标签
 * 
 * 演示Less样式
 * 
 * @visibleName 自定义标签  
 * 
 */
export default class MyLabel extends PureComponent{
    
    render() {
        const { children, ...props } =this.props;
        return (
            <label className={styles.myLabel} {...props} >label: {children}</label>
        );
    }
}

MyLabel.propTypes = {
    /** 按钮尺寸，分大中小三种 */
    size: t.oneOf(['small', 'normal', 'big']),

    /** 按钮文字颜色 */
    color: t.oneOf(['green', 'bule', 'rad']),

    /** 禁用按钮 */
    disabled: t.bool,
}

MyLabel.defaultProps = {
    size: 'normal',
    color: 'bule',
    disabled: false,
}