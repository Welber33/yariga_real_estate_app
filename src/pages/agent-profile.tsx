import { useOne } from "@pankod/refine-core" 
import { useParams } from "@pankod/refine-react-router-v6"

import { Profile } from "components"

export default function AgentProfile() {
  const { id } = useParams();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string
  })

  const myProfile = data?.data ?? [];

  console.log(myProfile)

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>

  return (
    <Profile 
      type="Agent"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  )
}
