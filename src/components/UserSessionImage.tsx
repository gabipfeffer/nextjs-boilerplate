import { Session } from "next-auth";

type Props = {
  session: Session | null;
  onClick: () => void;
  className?: string;
};

export default function UserSessionImage({
  session,
  onClick,
  className,
}: Props) {
  return (
    session && (
      <img
        onClick={onClick}
        className={`w-10 h-10 rounded-3xl transition-scale duration-1000 cursor-pointer hover:scale-105 ${className}`}
        src={session.user?.image!}
        alt={session.user?.name!}
      />
    )
  );
}
