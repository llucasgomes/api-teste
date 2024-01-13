export const postTest = async (req, res) => {
  //RECEBER OS DADOS
  const { searchProcess } = req.body;

 
 
 return res.status(200).json({
  mensage:'ok',
  searchProcess
 });
};