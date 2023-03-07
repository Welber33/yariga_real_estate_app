import { useGetIdentity, useOne } from "@pankod/refine-core" 

import { Profile } from "components"

export default function MyProfile() {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid
  })

  const myProfile = data?.data ?? [];

  console.log(myProfile)

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>

  return (
    <Profile 
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  )
}
