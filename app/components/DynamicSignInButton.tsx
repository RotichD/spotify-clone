interface Props {
    providerId: string;
    handleSignIn: (providerId: string) => void;
    children: React.ReactNode;
  }
  
  export default function DynamicSignInButton({
    providerId,
    handleSignIn,
    children,
  }: Props) {
    return (
      <button
        onClick={() => handleSignIn(providerId)}
        className="bg-[#18D860] text-black p-5 rounded-full"
      >
        {children}
      </button>
    );
  }