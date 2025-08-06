import { create } from 'zustand';

const useRedirections = create((set) => ({
  redirection_state: {
    title: 'text',
    img: 'img',
    description: 'description',
  },

  setRedirectionState: (obj) => {
    set({
      redirection_state: {
        title: obj.title,
        img: obj.img,
        description: obj.description,
      },
    });
  },
}));

export default useRedirections;
