import "@passageidentity/passage-elements/passage-auth";

export default function SignIn(): JSX.Element {
  return (
    <passage-auth app-id={import.meta.env.VITE_PASSAGE_APP_ID}></passage-auth>
  );
}
