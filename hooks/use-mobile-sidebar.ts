import {create} from "zustand";

type ModileSidebarStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useMobileSidebar = create<ModileSidebarStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
// () => ({}) は、return {}　と同義で短縮形の記法