export default function SingInForm() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      login: { value: string };
      password: { value: string };
    };

    console.log(target.login.value + '  ' + target.password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" required />
      <input type="password" name="password" required />
      <input type="submit" value="Sign in" />
    </form>
  );
}
