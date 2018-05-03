import {Component, ComponentClass, ComponentType, DetailedHTMLFactory, ReactHTML, StatelessComponent} from 'react'

export type PropsOf<T extends ComponentClass | Component | StatelessComponent | keyof ReactHTML> =
    T extends ComponentType<infer R> ?
        R :
        T extends Component<infer R> ?
            R :
            T extends keyof ReactHTML ?
                ReactHTML[T] extends DetailedHTMLFactory<infer R, any> ?
                    R :
                    never :
                never

