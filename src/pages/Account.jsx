import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserPersonNameForm from "../features/authentication/UpdateUserPersonNameForm.jsx";
import UpdateUserAvatarForm from "../features/authentication/UpdateUserAvatarForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user PersonName</Heading>
        <UpdateUserPersonNameForm />
      </Row>

        <Row>
            <Heading as="h3">Update user Avatar</Heading>
            <UpdateUserAvatarForm />
        </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
