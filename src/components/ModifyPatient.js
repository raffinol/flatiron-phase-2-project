import React from 'react';

function ModifyPatient() {
  function handleUpdateClick() {
    console.log('UpdateClick');
  }

  return (
    <div>
      <button onClick={handleUpdateClick}>Modify Patient</button>
    </div>
  );
}

export default ModifyPatient;
