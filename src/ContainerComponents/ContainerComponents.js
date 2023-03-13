import axios from "axios";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data
}

const getLocalStorage = key => () => {
  return localStorage.getItem(key)
}

const Text = ({ message }) => <h1>{message}</h1>

function ContainerComponents() {
  return (
    <>
      <DataSource getDataFunc={getServerData(`http://localhost:8080/users/123`)} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource getDataFunc={getLocalStorage('message')}>
        <Text />
      </DataSource>
    </>
  )
}

export default ContainerComponents;