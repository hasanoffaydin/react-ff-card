import React, { useState } from 'react';

const Data = (data) => {
    const [tableData, setTableData] = useState([
        
      ]);

  const addRow = () => {
    const newId = Math.max(...tableData.map(item => item.id), 0) + 1;
    const newRow = { id: newId, column1: data.cardHolder, column2: data.cardNumber, column3: data.MM+data.YY,column4 : data.cvc, column5: data.cardColor , column6: data.fontColor};
    setTableData([...tableData, newRow]);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ad Soyad</th>
            <th>Kartin Nomresi</th>
            <th>Kartin Bitme Tarixi</th>
            <th>Kartin Cvc</th>
            <th>Kartin Arxa Fonu</th>
            <th>Kartin Yazi Fonu</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(melumat => (
            <tr>
                <td>{melumat.id}</td>
              <td>{melumat.column1}</td>
              <td>{melumat.column2}</td>
              <td>{melumat.column3}</td>
              <td>{melumat.column4}</td>
              <td>{melumat.column5}</td>
              <td>{melumat.column6}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

export default Data;