// Import action types from the constrants file
import {
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    ADD_ROLE,
    UPDATE_ROLE,
    DELETE_ROLE,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    ADD_TASK,
    UPDATE_TASK,
    DELETE_TASK
} from "./constrants";


const initState = {
    usersDash: localStorage.getItem('users_dash') === null
        ? []
        : JSON.parse(localStorage.getItem('users_dash')),
    rolesDash: localStorage.getItem('roles_dash') === null
        ? []
        : JSON.parse(localStorage.getItem('roles_dash')),
    projectsDash: localStorage.getItem('projects_dash') === null
        ? []
        : JSON.parse(localStorage.getItem('projects_dash')),
    tasksDash: localStorage.getItem('tasks_dash') === null
        ? []
        : JSON.parse(localStorage.getItem('tasks_dash'))
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        // ALl case add
        case ADD_USER:
            localStorage.setItem('users_dash', JSON.stringify(
                [
                    ...state.usersDash,
                    action.payload
                ]
            ))
            return {
                ...state,
                usersDash: [
                    ...state.usersDash,
                    action.payload
                ]
            }
        case ADD_ROLE:
            localStorage.setItem('roles_dash', JSON.stringify(
                [
                    ...state.rolesDash,
                    action.payload
                ]
            ))
            return {
                ...state,
                rolesDash: [
                    ...state.rolesDash,
                    action.payload
                ]
            }
        case ADD_PROJECT:
            localStorage.setItem('projects_dash', JSON.stringify(
                [
                    ...state.projectsDash,
                    action.payload
                ]
            ))
            return {
                ...state,
                projectsDash: [
                    ...state.projectsDash,
                    action.payload
                ]
            }
        case ADD_TASK:
            localStorage.setItem('tasks_dash', JSON.stringify(
                [
                    ...state.tasksDash,
                    action.payload
                ]
            ))
            return {
                ...state,
                tasksDash: [
                    ...state.tasksDash,
                    action.payload
                ]
            }

        // ALl case update
        case UPDATE_USER:
            const updatedUsersDash = state.usersDash.map(user => {
                if (user.id === state.payload) {
                    return action.payload;
                }
                return user;
            })
            localStorage.setItem('users_dash', JSON.stringify(updatedUsersDash));
            return {
                ...state,
                usersDash: updatedUsersDash
            }
        case UPDATE_ROLE:
            const updatedRolesDash = state.rolesDash.map(role => {
                if (role.id === state.payload) {
                    return action.payload;
                }
                return role;
            })
            localStorage.setItem('roles_dash', JSON.stringify(updatedRolesDash));
            return {
                ...state,
                usersDash: updatedRolesDash
            }
        case UPDATE_PROJECT:
            const updatedProjectsDash = state.projectsDash.map(project => {
                if (project.id === state.payload) {
                    return action.payload;
                }
                return project;
            })
            localStorage.setItem('projects_dash', JSON.stringify(updatedProjectsDash));
            return {
                ...state,
                projectsDash: updatedProjectsDash
            }
        case UPDATE_TASK:
            const updatedTasksDash = state.tasksDash.map(task => {
                if (task.id === state.payload) {
                    return action.payload;
                }
                return task;
            })
            localStorage.setItem('tasks_dash', JSON.stringify(updatedTasksDash));
            return {
                ...state,
                tasksDash: updatedTasksDash
            }

        // All case delete
        case DELETE_USER:
            const newUsersDash = state.usersDash.filter((user) => {
                return user.id !== action.payload
            })
            localStorage.setItem('users_dash', JSON.stringify(newUsersDash))
            return {
                ...state,
                usersDash: newUsersDash
            }
        case DELETE_ROLE:
            const newRolesDash = state.rolesDash.filter((role) => {
                return role.id !== action.payload
            })
            localStorage.setItem('roles_dash', JSON.stringify(newRoles));
            return {
                ...state,
                rolesDash: newRolesDash
            }
        case DELETE_PROJECT:
            const newProjectsDash = state.projectsDash.filter((project) => {
                return project.id !== action.payload
            })
            localStorage.setItem('projects_dash', JSON.stringify(newProjects));
            return {
                ...state,
                projectsDash: newProjectsDash,
            }
        case DELETE_TASK:
            const newTasksDash = state.tasksDash.filter((task) => {
                return task.id !== action.payload
            })
            localStorage.setItem('tasks_dash', JSON.stringify(newTasksDash));
            return {
                ...state,
                tasksDash: newTasksDash,
            }
    }
}

export default rootReducer;