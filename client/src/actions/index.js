const incrementAdults = () => ({
  type: 'INCREMENT_ADULTS',
});

const decrementAdults = () => ({
  type: 'DECREMENT_ADULTS',
});

const incrementChildren = () => ({
  type: 'INCREMENT_CHILDREN',
});

const decrementChildren = () => ({
  type: 'DECREMENT_CHILDREN',
});

export {
  incrementAdults, decrementAdults, incrementChildren, decrementChildren,
};
