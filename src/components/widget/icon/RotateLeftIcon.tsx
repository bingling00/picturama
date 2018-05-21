import * as React from 'react'
import SvgIcon, { Props as SvgIconProps } from './SvgIcon'


/**
 * Shows the [rotate-left icon](https://github.com/gorangajic/react-icons/blob/master/md/rotate-left.js)
 * of `react-icons`.
 * 
 * Original icon from [Material Design Icons by Google](https://www.google.com/design/icons/).
 * 
 * We can't use `react-icons` directly because it provides ES6 module which our build can't import.
 */
export default class RotateLeftIcon extends React.Component<SvgIconProps, undefined> {
    render() {
        return (
            <SvgIcon viewBox="0 0 40 40" {...this.props}>
                <path d="m21.6 6.8c6.6 0.8 11.8 6.4 11.8 13.2s-5.2 12.4-11.8 13.2v-3.4c4.8-0.7 8.4-4.9 8.4-9.8s-3.6-9.1-8.4-9.8v6.4l-7.5-7.4 7.5-7.6v5.2z m-9.8 23.7l2.4-2.4c1.3 1 2.7 1.5 4.2 1.7v3.4c-2.4-0.3-4.6-1.2-6.6-2.7z m-1.6-8.9c0.2 1.5 0.7 2.9 1.6 4.2l-2.3 2.3c-1.5-1.9-2.4-4.1-2.7-6.5h3.4z m1.7-7.4c-0.9 1.3-1.5 2.7-1.7 4.2h-3.4c0.3-2.4 1.2-4.6 2.7-6.5z"/>
            </SvgIcon>
        )
    }
}