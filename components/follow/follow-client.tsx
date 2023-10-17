"use client";

import { useTransition } from "react";
import { Button } from "../ui/button";
import { follow, unfollow } from "@/app/users/[id]/actions";
import { Loader2 } from "lucide-react";

interface Props {
  currentUserId: string | null;
  targetUserId: string;
  isFollowing: boolean | null;
}

export default function FollowClient({
  currentUserId,
  targetUserId,
  isFollowing,
}: Props) {
  const [isPending, startTransition] = useTransition();

  if (currentUserId === null) {
    return <Button disabled>Follow</Button>;
  }

  if (isFollowing) {
    return (
      <Button
        variant="destructive"
        onClick={() =>
          startTransition(() => unfollow(currentUserId, targetUserId))
        }
      >
        {!isPending ? "Unfollow" : <Loader2 className="animate-spin" />}
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() =>
          startTransition(() => follow(currentUserId, targetUserId))
        }
      >
        {!isPending ? "Follow" : <Loader2 className="animate-spin" />}
      </Button>
    );
  }
}
