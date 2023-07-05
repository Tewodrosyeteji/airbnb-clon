"use client";
type MenuItemProps = {
  label: string;
  onClick: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 font-semibold transition"
    >
      {label}
    </div>
  );
};

export default MenuItem;
