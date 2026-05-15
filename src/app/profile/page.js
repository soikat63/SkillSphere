"use client";
import { Avatar, Card } from "@heroui/react";
import { authClient } from "../../../lib/auth-client";
import UpdateUserModal from "@/components/UpdateUserModal";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  console.log(user);

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center">
        <Avatar className=" h-20 w-20 ">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <h2 >
                  {user?.name}
              </h2>

              <UpdateUserModal/>
      </Card>
    </div>
  );
};

export default ProfilePage;
