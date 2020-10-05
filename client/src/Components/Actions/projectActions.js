export const createProject = project => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        
        const firestore = getFirestore();
        //async 
        firestore.collection('projects').add({
            ...project,
            Nombre:'José',
            Apellido: 'Cabrales',
            Comentario: 'Esto se subió a través del proyecto',
            id:123456
        }).then(() => {
            dispatch({type:'CREATE_PROJECT_SUCCESS', project})
        }).catch(error => {
            dispatch({type:'CREATE_PROJECT_ERROR', error})
        })
    }
}
