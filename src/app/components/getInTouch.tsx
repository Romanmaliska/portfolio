type Props = {
  children: React.ReactNode;
};
export default function GetInTouch({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-12">Get in Touch</h1>
      {children}
    </div>
  );
}
