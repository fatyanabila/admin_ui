const DarkModeReducer = (state, action) => {
    switch (action.type) {
      case "LIGHT": {
        return {
          darkMode: false,
        };
      }
      case "DARK": {
        return {
          darkMode: true,
        };
      }
      case "TOGGLE": {
        return {
          darkMode: !state.darkMode,
        };
      }
      default:
        return state;
    }
  };
  
  export default DarkModeReducer;

  /*useReducer digunakan untuk menyimpan dan memperbarui state, sama seperti useState Hook. 
    Ia menerima fungsi DarkModeReducer sebagai parameter pertama dan state awal sebagai yang kedua.*/ 
