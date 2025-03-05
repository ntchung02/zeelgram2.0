import { currentUser } from "@clerk/nextjs/server"


async function Mobilenavbar() {
    const user = await currentUser();
    console.log("user if here", user)
  return (
    <div>Mobilenavbar</div>
  )
}

export default Mobilenavbar