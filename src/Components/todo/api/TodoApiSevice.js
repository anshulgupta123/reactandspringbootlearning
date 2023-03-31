import axios from "axios";

const apiClient=axios.create({
    baseURL:'http://localhost:8080'
}
)

export const retereviveTodoListByUserName= (username) =>apiClient.get(`/users/${username}/todos`)

export const deleteTodoApi= (username,id) =>apiClient.delete(`/users/${username}/todos/${id}`)

export const reteriveTodoApiById= (username,id) =>apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodoApiById= (username,id,todo) =>apiClient.put(`/users/${username}/todos/${id}`,todo)

export const createTodoApiById= (username,todo) =>apiClient.post(`/users/${username}/todos`,todo)

