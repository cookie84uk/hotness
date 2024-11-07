// ** MUI Imports

const Chip = () => {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-sizeSmall': {
            height: '18px',

            '&.MuiAutocomplete-tag': {
              margin: '2px 1px 0 1px',
            },
          },
        },
        label: {
          fontSize: '1.17rem',
        },
        labelSmall: {
          lineHeight: '1.2',
        },
        deleteIcon: {
          marginRight: '3px',
        },
      },
    },
  }
}

export default Chip
