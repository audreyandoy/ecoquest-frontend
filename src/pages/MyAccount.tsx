import { useNavigate } from "react-router-dom";

export default function MyAccount(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>My Account</h1>
      </div>
      <div>
        <ul>
          <li>
            Monthly Quest: made up of multiple challenges and the users progress
            towards it
          </li>
          <li>
            Daily quest: made up of 2-3 challenges and the users progress
            towards it.
          </li>
          <li>Statistics:</li>
          <ul>
            <li>
              Streak info - number of days in a row that challenges were
              completed
            </li>
            <li>In-app points - leaves could be a fun depiction of points</li>
            <li>
              Level: based on reaching a certain number of in-app points. I
              haven't come up with a great name for these! Something nature
              related would be great!{" "}
            </li>
            <li>
              Achievements: reached by accomplishing certain goals, for example
            </li>
            <ul>
              <li>
                Weekend warrior: completed daily challenge on sat and sunday
              </li>
              <li>Champion: Made it to the diamond level</li>
              <li>Quest champ: completed 50 daily quests</li>
              <li>Legendary: complete a 365 day streak</li>
            </ul>
          </ul>
        </ul>
      </div>
    </div>
  );
}
