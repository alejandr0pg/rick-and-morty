import axios from 'axios';

const BaseUrl = 'https://rickandmortyapi.com/api/character';

const iniState = {
    currentData: [],
    allCharacters: [],
    page: 1,
    prev: null,
    next: null,
}

// Types
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
const NEXT_CHARACTER_PAGE_SUCCESS = 'NEXT_CHARACTER_PAGE_SUCCESS';
const PREV_CHARACTER_PAGE_SUCCESS = 'PREV_CHARACTER_PAGE_SUCCESS';

// Reducer
export default function charactersReducer(state = iniState, action: { type: any; payload: any; }) {
    switch(action.type) {
        case GET_CHARACTERS_SUCCESS: 
            return {
                ...state, 
                ...action.payload
            }
        case NEXT_CHARACTER_PAGE_SUCCESS:
            return {
                ...state, 
                ...action.payload
            }
        case PREV_CHARACTER_PAGE_SUCCESS:
            return {
                ...state, 
                ...action.payload
            }
        default:
            return state
    }
}

// Actions
export const getCharactersAction = () => async (dispatch: (arg0: { type: string; payload: { allCharacters: any[]; currentData: any; prev: any; next: any; }; }) => void, getState: () => { (): any; new(): any; characters: { page: any; allCharacters: any; }; }) => {
    try {
        const { page, allCharacters } = getState().characters;
        const res = await axios.get(`${BaseUrl}?page=${page}`);

        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: {
                allCharacters: [...allCharacters, ...res.data.results],
                currentData: res.data.results,
                prev: res.data.info.prev,
                next: res.data.info.next
            }
        })
    } catch (error) {
        console.log('error', error);
    }
}

export const nextCharacterPageAction = () => async (dispatch: (arg0: { type: string; payload: { allCharacters: any[]; currentData: any; page: any; prev: any; next: any; }; }) => void, getState: () => { (): any; new(): any; characters: { page: any; allCharacters: any; }; }) => {
    try {
        const { page, allCharacters } = getState().characters;
        const nextPage = page + 1;
        const res = await axios.get(`${BaseUrl}?page=${nextPage}`);

        dispatch({
            type: NEXT_CHARACTER_PAGE_SUCCESS,
            payload: {
                allCharacters: [...allCharacters, ...res.data.results],
                currentData: res.data.results,
                page: nextPage,
                prev: res.data.info.prev,
                next: res.data.info.next
            }
        })
    } catch (error) {
        console.log('error', error);
    }
}

export const prevCharacterPageAction = () => async (dispatch: (arg0: { type: string; payload: { allCharacters: any[]; currentData: any; page: any; prev: any; next: any; }; }) => void, getState: () => { (): any; new(): any; characters: { page: any; allCharacters: any; }; }) => {
    try {
        const { page, allCharacters } = getState().characters;
        const nextPage = page - 1;
        const res = await axios.get(`${BaseUrl}?page=${nextPage}`);

        dispatch({
            type: PREV_CHARACTER_PAGE_SUCCESS,
            payload: {
                allCharacters: [...allCharacters, ...res.data.results],
                currentData: res.data.results,
                page: nextPage,
                prev: res.data.info.prev,
                next: res.data.info.next
            }
        })
    } catch (error) {
        console.log('error', error);
    }
}