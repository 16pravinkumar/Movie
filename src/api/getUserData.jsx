export const getUserData = async({request}) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res)
     console.log(data)
     return null;
    
  } catch (error) {
    console.log(error.message)
    return {error: error.message}
  }
}