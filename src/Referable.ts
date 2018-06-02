import {Component, ComponentClass, ReactHTML} from 'react'

export type Referable = ComponentClass<any> | Component<any, any> | keyof ReactHTML | Element
