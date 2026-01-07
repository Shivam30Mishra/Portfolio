export default function Container({ children }) {
  return (
    <div className="max-w-[960px] mx-auto px-6">
      {children}
    </div>
  );
}
