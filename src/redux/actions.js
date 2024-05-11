// Import the 'sendToast' function from the configToast file
import { sendToast } from "src/config/configToast"
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


// Define the addUser function that takes a data object as an argument  
export const addUser = (data) => {
    sendToast('Successfully added to users list.');
    return {
        type: ADD_USER,
        payload: data
    }
}

// Define the updateUser function that takes a id as an argument  
export const updateUser = (id) => {
    sendToast('Successfully updated users.');
    return {
        type: UPDATE_USER,
        payload: id
    }
}

// Define the deleteUser function that takes a id object as an argument  
export const deleteUser = (id) => {
    sendToast('Successfully deleted users.');
    return {
        type: DELETE_USER,
        payload: id
    }
}

// define the addRole function that takes data object as an argument
export const addRole = (data) => {
    sendToast('Successfully added to roles list.');
    return {
        type: ADD_ROLE,
        payload: data
    }
}


// define the updateRole function that takes id as an argument
export const updateRole = (id) => {
    sendToast('Successfully updated role.');
    return {
        type: UPDATE_ROLE,
        payload: id
    }
}

// define the deleteRole function that takes id as an argument
export const deleteRole = (id) => {
    sendToast('Successfully deleted role.');
    return {
        type: DELETE_ROLE,
        payload: id
    }
}

// define the addProject function that takes data object as an argument
export const addProject = (data) => {
    sendToast('Successfully added to projects list.');
    return {
        type: ADD_PROJECT,
        payload: data
    }
}

// define the updateProject function that takes a id as an argument
export const updateProject = (id) => {
    sendToast('Successfully updated project.');
    return {
        type: UPDATE_PROJECT,
        payload: id
    }
}

// define the updateProject function that takes data as an argument
export const deleteProject = (id) => {
    sendToast('Successfully deleted project.');
    return {
        type: DELETE_PROJECT,
        payload: id
    }
}

// define the addProject function that takes data object as an argument
export const addTask = (data) => {
    sendToast('Successfully added to tasks list.');
    return {
        type: ADD_TASK,
        payload: data
    }
}

// define the addProject function that takes a id as an argument
export const updateTask = (id) => {
    sendToast('Successfully updated task.');
    return {
        type: UPDATE_TASK,
        payload: id
    }
}

// define the addProject function that takes a id as an argument
export const deleteTask = (id) => {
    sendToast('Successfully updated task.');
    return {
        type: DELETE_TASK,
        payload: id
    }
}