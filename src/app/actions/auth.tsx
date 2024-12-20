export async function signin(formData: FormData) {
  const validatedFields = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(validatedFields);
  return validatedFields;
}
