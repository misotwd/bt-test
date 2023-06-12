import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type Item = {
  id: number;
  name: string;
};

type TestStore = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
};

const useTestStore = create<TestStore>()(
  persist(
    set => ({
      items: [],
      addItem: item => {
        set(state => ({items: [...state.items, item]}));
      },
      removeItem: id => {
        set(state => ({items: state.items.filter(item => item.id !== id)}));
      },
    }),
    {
      name: 'testStore',
    }
  )
);

export default useTestStore;
