import React from "react";
import Input from "../UI/Input";
import Table from "../UI/Table";

const ExpensesTable = (props) => {
  return (
    <Table>
      <tr className="row1 ">
        <th>S.No.</th>
        <th>Particulars</th>
        <th>Amount Paid</th>
        <th>Receipt Details</th>
      </tr>

      <tr>
        <td>
          {" "}
          <Input type="number"></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <Input type="number"></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <Input type="number"></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <Input type="number"></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <Input type="number"></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <Input type="number"></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <Input type="number"></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>
    </Table>
  );
};

export default ExpensesTable;