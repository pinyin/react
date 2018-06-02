import {ObjExclude} from '@pinyin/types'
import {ComponentType, createElement, forwardRef, Ref} from 'react'
import {PropsOf} from './PropsOf'
import {Referable} from './Referable'
import {RefOf} from './RefOf'

export function forwardInnerRef<C extends ComponentType<WithInnerRef<any>>>(Wrapped: C): ComponentType<ObjExclude<PropsOf<C>, WithInnerRef<any>>> {
    return forwardRef<InnerRefInProps<C>, ObjExclude<PropsOf<C>, WithInnerRef<any>>>((props, ref) => {
        return createElement(
            Wrapped as any, // TODO
            Object.assign(
                {},
                props,
                {innerRef: ref}
            ),
            props.children
        )
    })
}

export type WithInnerRef<T extends Referable> = {
    innerRef?: Ref<RefOf<T>>
}

export type InnerRefInProps<T extends ComponentType<WithInnerRef<any>>> =
    T extends ComponentType<WithInnerRef<infer R>> ?
        R :
        never
