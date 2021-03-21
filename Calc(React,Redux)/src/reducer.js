const reducer = (state = 0, action) => {

    switch (action.type) {
      case 'INC':
        return state + 1;
      case "DEC":
        return state - 1;
      case 'RNDPOS':
        return state + action.value;
      case 'RNDNEG':
        return state + action.value;
      case 'CLEAR':
        return 0;
      default:
        return state
    }
  }

export default reducer;