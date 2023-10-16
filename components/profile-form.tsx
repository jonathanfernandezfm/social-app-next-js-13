"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface Props {
  user: any;
}

export function ProfileForm({ user }: Props) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div>
      <h2 className="mt-4 text-lg">Edit Your Profile</h2>
      <form
        onSubmit={updateUser}
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
