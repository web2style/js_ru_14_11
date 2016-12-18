import { CHANGE_LANGUAGE } from '../constants'

export function changeLanguage(language) {
    return {
        type: CHANGE_LANGUAGE,
        payload: {
            language
        }
    }
}