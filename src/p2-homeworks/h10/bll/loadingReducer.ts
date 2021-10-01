const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: loadingACType): typeof initState => { debugger// fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

type loadingACType = {
    type: string
    loading: boolean
}

export const loadingAC = (loading: boolean): loadingACType => ({type: 'IS-LOADING', loading}) // fix any