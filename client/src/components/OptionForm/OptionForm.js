import React from 'react';
import Form from 'react-bootstrap/Form';

function OptionForm() {
  return (
    <div>
      <Form.Select aria-label="Default select example">
        <option disabled value="Сортировка по">Сортировка по</option>
        <option value="name">По имени</option>
        <option value="email">По email</option>
        <option value="status">По статусу</option>
      </Form.Select>
      <hr />
    </div>
  );
}

export default OptionForm;
