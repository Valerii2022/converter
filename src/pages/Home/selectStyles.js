export const selectStyles = {
  control: styles => ({
    borderRadius: '8px',
    backgroundColor: '#f7f7fb',
    height: '48px',
    display: 'flex',
    padding: '0',
    // width: '224px',
    paddingLeft: '10px',
    paddingRight: '14px',
    borderRight: 'none',
    color: 'teal',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.11',
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: 'transparent',
      color: isFocused ? 'teal' : 'rgba(0, 128, 128, 0.20)',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.25',
      cursor: 'pointer',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '4px',
      paddingBottom: '4px',
    };
  },
  placeholder: styles => {
    return {
      ...styles,
      color: 'teal',
    };
  },
  dropdownIndicator: (styles, state) => ({
    ...styles,
    svg: {
      fill: 'teal',
    },
    cursor: 'pointer',
    transition: 'transform 250ms linear',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '10px',
    paddingLeft: '18px',
    paddingTop: '10px',
    paddingBottom: '18px',
    paddingRight: '8px',
  }),
  menuList: styles => ({
    ...styles,
    '::-webkit-scrollbar': {
      width: '8px',
      height: '0px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(0, 128, 128, 0.05)',
      borderRadius: '10px',
    },
  }),
};
