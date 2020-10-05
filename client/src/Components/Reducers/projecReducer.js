const initialState = {
    projects:[
        {id:1, titulo: 'Joseph', contenido: 'Vanz'},
        {id:2, titulo: 'Joseph2', contenido: 'Vanz2'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('Project ok', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('Project error', action.error)
            return state
            default:
                return state
    }            
}

export default projectReducer