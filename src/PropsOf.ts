import {Component, ComponentClass, DetailedHTMLFactory, ReactHTML, StatelessComponent} from 'react'

export type PropsOf<T extends ComponentClass | Component | StatelessComponent | keyof ReactHTML> =
    T extends ComponentClass<infer R> ?
        R :
        T extends StatelessComponent<infer R> ?
            R :
            T extends Component<infer R> ?
                R :
                T extends keyof ReactHTML ?
                    ReactHTML[T] extends DetailedHTMLFactory<infer R, any> ?
                        R :
                        never :
                    never

