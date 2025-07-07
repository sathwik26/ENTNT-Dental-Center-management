export const saveUserToStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromStorage = () => {
  const saved = localStorage.getItem("user");
  return saved ? JSON.parse(saved) : null;
};
