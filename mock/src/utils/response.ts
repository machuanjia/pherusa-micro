export const resSuccess = (data, message?:string) => {
  return {
    code: 200,
    message: message || '',
    data,
  };
};
