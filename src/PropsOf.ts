import {Component, ComponentClass, ComponentType, DetailedHTMLFactory, DOMFactory, ReactHTML, ReactSVG, StatelessComponent} from 'react'

export type PropsOf<T extends ComponentType<any> | ComponentClass<any> | Component<any, any> | StatelessComponent<any> | keyof ReactHTML | keyof ReactSVG> =
    T extends ComponentType<infer R> ?
        R :
        T extends ComponentClass<infer R> ?
            R :
            T extends StatelessComponent<infer R> ?
                R :
                T extends Component<infer R, any> ?
                    R :
                    T extends keyof ReactHTML ?
                        PropsOfHTMLTag<T> :
                        T extends keyof ReactSVG ?
                            PropsOfSVGTag<T> :
                            never

export type PropsOfHTMLTag<T extends keyof ReactHTML> =
    ReactHTML[T] extends DetailedHTMLFactory<infer R, any> ?
        R :
        never

export type PropsOfSVGTag<T extends keyof ReactSVG> =
    ReactSVG[T] extends DOMFactory<infer R, any> ?
        R :
        never
