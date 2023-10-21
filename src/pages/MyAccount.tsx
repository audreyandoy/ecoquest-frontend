import { useNavigate } from "react-router-dom";
import ProfileStats from "../components/ProfileStats";

export default function MyAccount(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <ProfileStats></ProfileStats>
      

    </div>
  );
}
