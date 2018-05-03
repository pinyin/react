export type EventHandler<T=any> = (event: T) => void
export type EventHandlers<Events> = {[Name in keyof Events]: EventHandler<Events[Name]>}
