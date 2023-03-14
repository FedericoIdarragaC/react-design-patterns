import { printProps } from "./printProps";
import { UserInfo } from "../ContainerComponents/UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";

function HighOrderComponents() {
  return (
    <UserInfoForm />
  )
}

export default HighOrderComponents;