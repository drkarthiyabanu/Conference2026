// Utility function to download PDF files
export const downloadPDF = (filename: string, filepath: string) => {
  const link = document.createElement('a');
  link.href = filepath;
  link.download = filename;
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
