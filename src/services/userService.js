import apiService from "./apiService";
const userService = {
    login(user) {
        return apiService.post("/auth/login", user);
    },
    getAllUsers() {
        return apiService.get("/users");
    },
    createUser(user) {
        return apiService.post("/users", user);
    },
    updateUser(user) {
        return apiService.put(`/users/${user.id}`, user);
    },
    deleteUser(id) {
        return apiService.delete(`/users/${id}`);
    }
};

export default userService;