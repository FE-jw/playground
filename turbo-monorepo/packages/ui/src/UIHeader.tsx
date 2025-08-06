type UIHeaderProps = {
  children: React.ReactNode;
};

export default function UIHeader({ children }: UIHeaderProps) {
  return <header>{children}</header>;
}
