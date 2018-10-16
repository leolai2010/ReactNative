export const selectLibrary = (libraryId) =>{
    return {
        type: 'select_library', //the type property signify this as action
        payload: libraryId
    };    
};