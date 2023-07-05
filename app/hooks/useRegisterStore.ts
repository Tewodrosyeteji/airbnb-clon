import { create } from "zustand";

type UseRegisterStoreProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useRegisterStore = create<UseRegisterStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
export default useRegisterStore;
