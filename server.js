const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Nome da planilha');

const data = [
  {
    "name": "Teste",
    "email": "teste@email.com",
    "cellphone": "99999999999"
  },
  {
    "name": "Pessoa",
    "email": "pessoa@email.com",
    "cellphone": "99999999999"
  }
];

const headingColumnNames = [
  "Nome",
  "Email",
  "Celular"
];

let headingColumnIndex = 1;

headingColumnNames.forEach(heading =>{
  ws.cell(1,headingColumnIndex++).string(heading);
})

let rowIndex = 2;
data.forEach(record =>{
  let ColumnIndex = 1;
  Object.keys(record).forEach(columnName=>{
    ws.cell(rowIndex, ColumnIndex++).string(record[columnName])
  });
  rowIndex++;
})

wb.write('arquivo.xlsx')
