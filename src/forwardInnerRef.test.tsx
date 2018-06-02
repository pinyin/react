import {ObjExclude} from '@pinyin/types'
import * as React from 'react'
import {create} from 'react-test-renderer'
import {forwardInnerRef, WithInnerRef} from './forwardInnerRef'
import {PropsOf} from './PropsOf'

class RefTarget extends React.Component {
    render() {
        return null
    }
}

class RefForwarding extends React.Component<WithInnerRef<RefTarget>> {
    render() {
        return <RefTarget ref={this.props.innerRef}>
        </RefTarget>
    }
}

const RefForwarded = React.forwardRef<RefTarget, ObjExclude<PropsOf<RefForwarding>, WithInnerRef<any>>>((props, ref) =>
    <RefForwarding innerRef={ref}/>
)

describe(`${forwardInnerRef.name}`, () => {
    const ref = React.createRef<RefTarget>()
    create(<RefForwarded ref={ref}/>)

    test('ref should be forwarded to inner component', () => {
        expect(ref.current).toBeInstanceOf(RefTarget)
    })
})
