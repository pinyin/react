import {Maybe} from '@pinyin/maybe'
import {Referable} from './Referable'
import {RefOf} from './RefOf'

export type InnerRef<T> =
    T extends Referable ?
        { innerRef?: (ref: Maybe<RefOf<T>>) => void } :
        { innerRef?: never }
