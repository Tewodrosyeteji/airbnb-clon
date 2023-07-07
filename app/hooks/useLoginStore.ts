import { create } from "zustand";

type UseLoginStoreProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useLoginStore = create<UseLoginStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
export default useLoginStore;
