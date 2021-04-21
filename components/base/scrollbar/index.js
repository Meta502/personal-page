const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #2F2F2F; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;


const Scrollbar = () => (
  <style type="text/css">
    {scrollbarStyle}
  </style>
);

export default Scrollbar;
