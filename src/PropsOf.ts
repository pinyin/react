import {Component, ComponentClass, ComponentType, DetailedHTMLFactory, ReactHTML, StatelessComponent} from 'react'

export type PropsOf<T extends ComponentType<any> | ComponentClass<any> | Component<any, any> | StatelessComponent<any> | keyof ReactHTML> =
    T extends ComponentType<infer R> ?
        R :
        T extends ComponentClass<infer R> ?
            R :
            T extends StatelessComponent<infer R> ?
                R :
                T extends Component<infer R, any> ?
                    R :
                    T extends HTMLElement ?
                        PropsOfElement<T> :
                        T extends keyof ReactHTML ?
                            PropsOfTag<T> :
                            never
// TODO Support SVG element

export type PropsOfTag<T extends keyof ReactHTML> =
    ReactHTML[T] extends DetailedHTMLFactory<infer R, any> ?
        R :
        never

export type PropsOfElement<T extends HTMLElement, K extends keyof ReactHTML = keyof ReactHTML> = {
    [key in K]: ReactHTML[key] extends DetailedHTMLFactory<infer R, T> ? R : never
}[K]
