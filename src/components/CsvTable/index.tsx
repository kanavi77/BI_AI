import React from 'react';
import { ListTable } from '@visactor/react-vtable';
function parseCSVToOption(csvString:string) {
  // 使用逗号分隔符分割 CSV 字符串
  const rows = csvString.trim().split('\n').map(row => row.split(','));

  // 第一行是表头
  const headers = rows[0];

  // 获取数据行
  const data = rows.slice(1);

  // 创建列
  const columns = headers.map((header, index) => ({
    field: index.toString(),
    caption: header,
  }));

  // 创建数据记录
  const records = data.map(row => row.map((cell, index) => cell.trim()));

  return { columns, records };
}
interface CsvTableProps {
  csvData: string|undefined;
}

const CsvTable: React.FC<CsvTableProps> = ({ csvData }) => {
  const option = parseCSVToOption(csvData);

  return (
    <ListTable option={{
      ...option,
      autoFillHeight: true
    }}
               style={{height:'405px'}}/>
  )
};

export default CsvTable;

