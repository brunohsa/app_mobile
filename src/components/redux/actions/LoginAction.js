export const fazerLogin = (email,senha) => ({
  type: "LOGIN_REQUEST",
  payload:{
    email,
    senha
  }
});