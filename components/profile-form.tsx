import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

interface Props {
  user: any;
}

export async function ProfileForm({ user }: Props) {
  const session = await getServerSession(authOptions);

  async function updateUserAction(formData: FormData) {
    "use server";

    const body = {
      name: formData.get("name") as string,
      bio: formData.get("bio") as string,
      age: Number(formData.get("age")),
      image: formData.get("image") as string,
    };

    const currentEmail = session?.user?.email!;

    await prisma.user.update({
      where: {
        email: currentEmail,
      },
      data: body,
    });

    revalidatePath("/settings");
  }

  return (
    <div>
      <h2 className="mt-4 text-lg">Edit Your Profile</h2>
      <form
        action={updateUserAction}
        className="mt-4 flex w-[500px] flex-col gap-4"
      >
        <Input
          name="name"
          type="text"
          placeholder="Name"
          defaultValue={user?.name ?? ""}
        />
        <Textarea
          placeholder="Bio"
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
        />
        <Input
          name="age"
          type="text"
          placeholder="Age"
          defaultValue={user?.age ?? ""}
        />
        <Input
          name="image"
          type="text"
          placeholder="Profile Image URL"
          defaultValue={user?.image ?? ""}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
