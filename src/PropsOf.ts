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
                    T extends keyof ReactHTML ?
                        ReactHTML[T] extends DetailedHTMLFactory<infer R, any> ?
                            R :
                            never :
                        never

