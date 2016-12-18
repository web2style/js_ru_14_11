import { CHANGE_LANGUAGE, DEFAULT_LANGUAGE } from '../constants'


const defaultState = {
    language: DEFAULT_LANGUAGE
}

export default (intlState = defaultState, action) => {

    switch (action.type) {
        case CHANGE_LANGUAGE:
        const { payload: {language}} = action
            return {
                ...intlState,
                language
            }
    }

    return intlState
}