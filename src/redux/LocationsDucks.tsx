import axios from 'axios';
import { map } from 'p-iteration'
 
const BaseUrl = 'https://rickandmortyapi.com/api/location';
const CharactersBaseUrl = 'https://rickandmortyapi.com/api/character';

const iniState = {
    currentData: [],
    page: 1,
    prev: null,
    next: null,
}

// Types
const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
const NEXT_LOCATION_PAGE_SUCCESS = 'NEXT_LOCATION_PAGE_SUCCESS';
const PREV_LOCATION_PAGE_SUCCESS = 'PREV_LOCATION_PAGE_SUCCESS';

// Reducer
export default function locationsReducer(state = iniState, action: { type: any; payload: any; }) {
    switch(action.type) {
        case GET_LOCATION_SUCCESS: 
            return {
                ...state, 
                ...action.payload
            }
        case NEXT_LOCATION_PAGE_SUCCESS:
            return {
                ...state, 
                ...action.payload
            }
        case PREV_LOCATION_PAGE_SUCCESS:
            return {
                ...state, 
                ...action.payload
            }
        default:
            return state
    }
}

// Helpers
const formatResidents = (locations: any[], characters: ICharacter[]) => {
    return map(locations, async (location) => {
        const residents = location.residents.slice(0, 3);
        const formatedResidents = map(residents, async(character: ICharacter) => {
            const rId = character.replace('https://rickandmortyapi.com/api/character/', '');
            let newResidentInfo = characters.find((c: { id: any; }) => c.id == rId);

            if(!newResidentInfo) {
                const res = await getCharacterInfo(rId);
                newResidentInfo = res.data;
            }

            return newResidentInfo;
        })

        location.residents = [...await formatedResidents, ...location.residents.slice(3, 102)];
        //
        return location;
    })
}

const getCharacterInfo = async (rId: number) => {
    return await axios.get(`${CharactersBaseUrl}/${rId}`)
}

// Actions
export const getLocationsAction = () => async (dispatch: (arg0: { type: string; payload: { currentData: { residents: any[]; }[]; prev: any; next: any; }; }) => void, getState: () => { (): any; new(): any; locations: { page: any; }; characters: { allCharacters: any; }; }) => {
    try {
        const { page } = getState().locations;
        const { allCharacters } = getState().characters;
        const res = await axios.get(`${BaseUrl}?page=${page}`);

        const currentData = await formatResidents(res.data.results, allCharacters);

        dispatch({
            type: GET_LOCATION_SUCCESS,
            payload: {
                currentData,
                prev: res.data.info.prev,
                next: res.data.info.next
            }
        })
    } catch (error) {
        console.log('error', error);
    }
}

export const nextLocationPageAction = () => async (dispatch: (arg0: { type: string; payload: { currentData: { residents: any[]; }[]; page: any; prev: any; next: any; }; }) => void, getState: () => { (): any; new(): any; locations: { page: any; }; characters: { allCharacters: any; }; }) => {
    try {
        const { page } = getState().locations;
        const { allCharacters } = getState().characters;
        //
        const nextPage = page + 1;
        const res = await axios.get(`${BaseUrl}?page=${nextPage}`);
        //
        const currentData = await formatResidents(res.data.results, allCharacters);
        //
        dispatch({
            type: NEXT_LOCATION_PAGE_SUCCESS,
            payload: {
                currentData,
                page: nextPage,
                prev: res.data.info.prev,
                next: res.data.info.next
            }
        })
    } catch (error) {
        console.log('error', error);
    }
}

export const prevLocationPageAction = () => async (dispatch: (arg0: { type: string; payload: { currentData: { residents: any[]; }[]; page: number; prev: any; next: any; }; }) => void, getState: () => { (): any; new(): any; locations: { page: any; }; characters: { allCharacters: any; }; }) => {
    try {
        const { page } = getState().locations;
        const { allCharacters } = getState().characters;
        //
        const nextPage = page - 1;
        const res = await axios.get(`${BaseUrl}?page=${nextPage}`);
        //
        const currentData = await formatResidents(res.data.results, allCharacters);
        //
        dispatch({
            type: PREV_LOCATION_PAGE_SUCCESS,
            payload: {
                currentData,
                page: nextPage,
                prev: res.data.info.prev,
                next: res.data.info.next
            }
        })
    } catch (error) {
        console.log('error', error);
    }
}